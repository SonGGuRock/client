'use client';

import useCreate from '@/app/shared/api/useCreate';
import Back from '@/app/shared/atoms/Back';
import Title from '@/app/shared/atoms/Title';
import NotificationsList from '@/app/widget/notifications/ui/notifications-list';

const NotificationsListPage = () => {
  const { post } = useCreate({
    path: 'notifications',
    revalidate: true,
    revalidatePath: 'notifications',
  });
  const handleClickAllRead = () => {
    post();
  };
  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back />
          <Title>알림</Title>
        </div>
        <span className='text-grey900 text-sm' onClick={handleClickAllRead}>
          전체 읽음
        </span>
      </div>

      <NotificationsList />
    </div>
  );
};

export default NotificationsListPage;
