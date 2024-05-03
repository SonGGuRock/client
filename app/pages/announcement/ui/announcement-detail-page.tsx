'use client';

import useToast from '@/app/widget/toast/lib/useToast';
import Back from '@/app/shared/atoms/Back';
import ModalMenu from '@/app/shared/atoms/ModalMenu';
import MeatBall from '@/app/shared/atoms/MeatBall';
import Toast from '@/app/widget/toast/ui/toast';
import ArtilcePreview from '@/app/shared/modules/ArticlePreview';
import { usePathname, useRouter } from 'next/navigation';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';

const AnnouncementDetailPage = () => {
  const { openModal } = useModal();
  const { toast, toggleToast } = useToast();
  const path = usePathname();
  const router = useRouter();

  const handleOpenModal = () => {
    openModal(
      <>
        <ModalMenu
          key='bsm-0'
          iconUrl='/icon/ic-notice-empty-24px.svg'
          onClick={() => {}}
        >
          대표 공지로 등록하기
        </ModalMenu>
        <ModalMenu
          key='bsm-1'
          iconUrl='/icon/ic-edit_24px.svg'
          onClick={() => {
            router.push(`${path}/edit`);
          }}
        >
          수정하기
        </ModalMenu>
        <ModalMenu
          key='bsm-2'
          iconUrl='/icon/ic-delete_24px.svg'
          type='secondary'
          onClick={() => {
            toggleToast({ text: '삭제하였습니다.' });
          }}
        >
          삭제하기
        </ModalMenu>
      </>
    );
  };
  return (
    <div className='py-3 px-4'>
      <div className='flex justify-between items-center'>
        <Back />
        <MeatBall onClick={handleOpenModal} />
      </div>
      <ArtilcePreview
        size='large'
        title='12/31 쉽니다'
        updated_at='2024-01-24'
      />
      <div className='pt-8'>
        여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번
        블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히
        소개합니다. 첫째, 편안한 여행을 위한 양질의 여행 가방. 두 번째는 다양한
        환경에 대비할 수 있는 다용도 의류. 세 번째 아이템은 여행 중 긴급 상황에
        대비한 응급 키트입니다. 네 번째는 휴대용 충전기와 보조 배터리로, 언제
        어디서든 기기를 충전할 수 있게 해줍니다.
      </div>
      <PortalModal />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementDetailPage;
