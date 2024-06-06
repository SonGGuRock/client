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
import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import {
  AnnouncementEditRequest,
  Announcment,
} from '@/app/widget/announcements/lib/type';
import { useQueryClient } from '@tanstack/react-query';

const AnnouncementDetailPage = () => {
  const queryClient = useQueryClient();
  const path = usePathname();
  const { data: announcement } = useQueryWithCredentials<Announcment>(
    `${path}`
  );

  const { mutate } = useMutateWithCrendetials<AnnouncementEditRequest>(
    `${path}`
  );
  const { openModal } = useModal();
  const { toast, toggleToast } = useToast();
  const router = useRouter();

  const handleRepresentitive = () => {
    announcement &&
      mutate(
        {
          method: 'PUT',
          body: {
            title: '테스트용',
            content: announcement.content + 'test',
            is_representative_announcement:
              !announcement.is_representative_announcement,
          },
        },
        {
          onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [`${path}`] }),
        }
      );
  };

  const handleDelete = () => {
    announcement &&
      mutate(
        {
          method: 'DELETE',
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [`${path}`] });
            toggleToast({ text: '삭제하였습니다.' });
            router.push('/announcements');
          },
        }
      );
  };
  const handleOpenModal = () => {
    openModal(
      <>
        <ModalMenu
          key='bsm-0'
          iconUrl='/icon/ic-notice-empty-24px.svg'
          onClick={handleRepresentitive}
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
            handleDelete();
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
      <ArtilcePreview size='large' title='임의 title' updated_at='2024-01-24' />
      <div className='pt-8'>{announcement?.content}</div>
      <PortalModal />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementDetailPage;
