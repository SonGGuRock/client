import { TodoCreateBody } from '@/app/shared/api/fetch-with-credentials';
import useCreate from '@/app/shared/api/useCreate';
import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ModalContentWithInput from '@/app/shared/modules/modal/ui/ModalContentWithInput';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import Image from 'next/image';

interface TodoHeaderProps {
  allCount: number;
  restCount: number;
}

const TodoHeader = ({ allCount, restCount }: TodoHeaderProps) => {
  const { post } = useCreate<TodoCreateBody>({
    path: 'todos',
    revalidate: true,
    revalidatePath: 'todos',
  });
  const { openModal, closeModal } = useModal();
  const openAddModal = () => {
    openModal(
      <ModalContentWithInput
        title='할 일 추가'
        placeholder='오늘의 할 일을 입력하세요'
        onDone={(content) => post({ content })}
        onClose={closeModal}
      />
    );
  };
  return (
    <div className='flex justify-between'>
      <div className='text-lg font-semibold flex items-center gap-2 mb-4'>
        <Title>오늘의 할 일</Title>
        <span>
          <strong className='text-brown'>{restCount}</strong>/{allCount}
        </span>
      </div>
      <Button
        size='small'
        onClick={openAddModal}
        style='primary'
        icon={
          <Image
            src='/icon/ic_plus_white.svg'
            alt='추가 버튼'
            width={18}
            height={18}
          />
        }
      >
        할 일 추가
      </Button>
      <PortalModal />
    </div>
  );
};

export default TodoHeader;
