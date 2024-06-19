'use client';
import Cookies from 'js-cookie';
import { Todo } from '@/app/lib-temp/definition';
import CheckBox from '../../shared/atoms/CheckBox';
import MeatBall from '../../shared/atoms/MeatBall';

import ModalMenu from '../../shared/modules/modal/ui/ModalMenu';
import ModalContentWithInput from '../../shared/modules/modal/ui/ModalContentWithInput';
import ToastContent from '../../shared/modules/toast/ui/Toast';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';

import { useQueryClient } from '@tanstack/react-query';
import Thumbnail from '@/app/shared/atoms/Thumbnail';

const TodoItem = ({ id, content, is_completed, author }: Todo) => {
  const memberId = Cookies.get('MEMBERID');
  const queryClient = useQueryClient();
  const { closeModal, openModal } = useModal();

  const { mutate, isPending, variables, isSuccess } = useMutateWithCrendetials<
    | {
        is_completed: boolean;
        content: string;
      }
    | undefined
  >(`todos/${id}`);

  const { toast, toggleToast } = useToast();

  const handleCheck = () => {
    mutate(
      {
        method: 'PUT',
        body: {
          content,
          is_completed: !is_completed,
        },
      },
      {
        onSettled: () =>
          queryClient.invalidateQueries({
            queryKey: ['todos'],
          }),
      }
    );
  };

  const handleEdit = (newContent: string) => {
    mutate(
      {
        method: 'PUT',
        body: {
          content: newContent,
          is_completed,
        },
      },
      {
        onSettled: () =>
          queryClient.invalidateQueries({
            queryKey: ['todos'],
          }),
      }
    );
  };

  const handleDelete = () => {
    mutate(
      {
        method: 'DELETE',
      },
      {
        onSettled: () =>
          queryClient.invalidateQueries({
            queryKey: ['todos'],
          }),
      }
    );
  };

  const handleOpenModalEditMenu = () => {
    openModal(
      <div className='flex flex-wrap gap-4'>
        <ModalMenu
          key='bsm-1'
          iconUrl='/icon/ic-edit_24px.svg'
          onClick={() => {
            closeModal();
            handleOpenModalEditor();
          }}
        >
          수정하기
        </ModalMenu>
        <ModalMenu
          key='bsm-2'
          iconUrl='/icon/ic-delete_24px.svg'
          type='secondary'
          onClick={() => {
            handleDelete();
            closeModal();
            toggleToast({ text: '할 일을 삭제하였습니다.' });
          }}
        >
          삭제하기
        </ModalMenu>
      </div>
    );
  };

  const handleOpenModalEditor = () => {
    openModal(
      <ModalContentWithInput
        title='할 일 수정'
        defaultValue={content}
        onDone={(content) => {
          handleEdit(content);
          closeModal();
          toggleToast({ text: '할 일을 수정하였습니다' });
        }}
        onClose={closeModal}
      />
    );
  };
  return (
    <li
      key={`${id}`}
      className='w-full bg-grey50 rounded-md px-3 py-4 flex items-center gap-4 cursor-pointer '
    >
      {isPending ? (
        <CheckBox
          isChecked={variables.body?.is_completed}
          onCheck={handleCheck}
          classNames='opacity-50'
        />
      ) : (
        <CheckBox isChecked={is_completed} onCheck={handleCheck} />
      )}
      <label
        htmlFor='memo1'
        className={`w-full text-sm cursor-pointer flex items-center justify-between  ${
          is_completed && 'text-grey500'
        }`}
      >
        {isPending ? variables.body?.content : content}
        <span>
          {author.id === Number(memberId) ? (
            <MeatBall onClick={handleOpenModalEditMenu} />
          ) : (
            <Thumbnail id={author.id} imageUrl={author.profile_picture} />
          )}
        </span>
      </label>
      {toast && <Toast text={toast.text} />}
    </li>
  );
};

export default TodoItem;
