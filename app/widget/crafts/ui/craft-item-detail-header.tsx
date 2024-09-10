'use client';

import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import Header from '@/app/shared/modules/header';
import { useParams, useRouter } from 'next/navigation';

const CraftItemDetailHeader = () => {
  const params = useParams();
  const craftId = params.id as string;
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/crafts/${craftId}/edit`);
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
            onClick={() => {}}
          >
            삭제하기
          </ModalMenu>
        </Header.MeatBall>
      </div>
    </Header>
  );
};

export default CraftItemDetailHeader;
