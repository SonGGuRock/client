'use client';

import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import Header from '@/app/shared/modules/header';
import { useParams, useRouter } from 'next/navigation';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useDelete from '@/app/shared/api/useDelete';
import ModalContentInfoType from '@/app/shared/modules/modal/ui/modal-content-info-type';

const CraftItemDetailHeader = () => {
  const params = useParams();
  const craftId = params['id'] as string;
  const itemId = params['itemId'] as string;
  const router = useRouter();
  const { closeModal, openModal } = useModal();
  const { remove } = useDelete({
    path: `/crafts/items/${itemId}`,
    revalidate: true,
    revalidatePath: 'crafts',
  });

  const handleEdit = () => {
    // closeModal();
    router.push(`/crafts/${craftId}/${itemId}/edit`);
  };

  const handleDelete = () => {
    openModal(
      <ModalContentInfoType
        text='정말 삭제하시겠습니까?'
        onClickPrimary={() => {
          remove();
        }}
        onClickSecondary={() => {
          closeModal();
        }}
        primaryButtonText='삭제'
        secondaryButtonText='취소'
      />
    );
  };
  return (
    <Header className='w-full absolute left-0 top-0 px-4'>
      <Header.Back />
      <div className='w-6 h-6 rounded-full opacity-50 bg-white'>
        <Header.MeatBall>
          <ModalMenu iconUrl='/icon/ic-edit_24px.svg' onClick={handleEdit}>
            편집하기
          </ModalMenu>
          <ModalMenu
            type='secondary'
            iconUrl='/icon/ic-delete_24px.svg'
            onClick={handleDelete}
          >
            삭제하기
          </ModalMenu>
        </Header.MeatBall>
      </div>
    </Header>
  );
};

export default CraftItemDetailHeader;
