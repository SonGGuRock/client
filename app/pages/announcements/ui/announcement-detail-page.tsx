'use client';

import useToast from '@/app/shared/modules/toast/lib/useToast';
import Back from '@/app/shared/atoms/Back';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import MeatBall from '@/app/shared/atoms/MeatBall';
import Article from '@/app/shared/modules/Article';
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
import { Toast } from '@/app/shared/modules/toast/ui/Toast';

const AnnouncementDetailPage = () => {
  const queryClient = useQueryClient();
  const path = usePathname();
  const router = useRouter();
  const { data: announcement } = useQueryWithCredentials<Announcment>(
    `${path}`
  );
  const { mutate } = useMutateWithCrendetials<AnnouncementEditRequest>(
    `${path}`
  );
  const { openModal, closeModal } = useModal();
  const { toast, toggleToast } = useToast();

  const handleRepresentitive = () => {
    announcement &&
      mutate(
        {
          method: 'PUT',
          body: {
            title: announcement.title,
            content: announcement.content,
            is_representative_announcement:
              !announcement.is_representative_announcement,
          },
        },
        {
          onSuccess: () => {
            toggleToast({
              text: `${
                announcement.is_representative_announcement
                  ? '대표 공지를 해제하였습니다'
                  : '대표 공지로 등록하였습니다'
              }`,
            });
            closeModal();
            queryClient.invalidateQueries({ queryKey: [`${path}`] });
          },
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
          대표 공지{' '}
          {`${announcement?.is_representative_announcement ? '해제' : '등록'}`}
          하기
        </ModalMenu>
        <ModalMenu
          key='bsm-1'
          iconUrl='/icon/ic-edit_24px.svg'
          onClick={() => {
            closeModal();
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
        <Back
          onClick={() => {
            router.push('/announcements');
          }}
        />
        <MeatBall onClick={handleOpenModal} />
      </div>
      {announcement && <Article content={announcement} />}
      <div className='pt-8'>{announcement?.content}</div>
      <PortalModal />
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default AnnouncementDetailPage;
