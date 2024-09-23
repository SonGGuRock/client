import Cookies from 'js-cookie';

import MeatBall from '@/app/shared/atoms/MeatBall';
import Thumbnail from '@/app/shared/atoms/Thumbnail';
import Toast from '@/app/shared/modules/toast/ui/toast';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import ModalContentWithInput from '@/app/shared/modules/modal/ui/ModalContentWithInput';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import { Todo } from '../lib/type';
import useUpdate from '@/app/shared/api/useUpdate';
import { TodoContent } from '@/app/lib-temp/definition';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import useDelete from '@/app/shared/api/useDelete';

const TodoAuthor = ({ id, is_completed, content, author }: Todo) => {
  const { closeModal, openModal } = useModal();
  const { toast, toggleToast } = useToast();
  const memberId = Cookies.get('MEMBERID');

  const { update } = useUpdate<TodoContent>({
    path: `todos/${id}`,
    revalidate: true,
    revalidatePath: 'todos',
  });

  const { remove } = useDelete<TodoContent>({
    path: `todos/${id}`,
    revalidate: true,
    revalidatePath: 'todos',
  });

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

  const handleEdit = (newContent: string) => {
    update({
      content: newContent,
      is_completed,
    });
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

  const handleDelete = () => {
    remove();
  };

  return (
    <span>
      {author.id === Number(memberId) ? (
        <MeatBall onClick={handleOpenModalEditMenu} />
      ) : (
        <Thumbnail
          id={author.id}
          imageUrl={author.profile_picture}
          type='teacher'
        />
      )}

      {toast && <Toast text={toast.text} />}
    </span>
  );
};

export default TodoAuthor;
