'use client';

import { Notification } from '@/app/entities/notifications/types';
import useNotificationCategories from '../lib/useNotificationCategories';
import NotificationItem from './notification-item';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';

// const NOTIFICATIONS: Notification[] = [
//   {
//     id: 1,
//     category: '예약',
//     title: '새로운 예약',
//     content: '000님이 1월 22일 예약하였습니다.',
//     updated_at: '2024-01-24',
//     readers: [
//       {
//         id: 12,
//         profile_picture: '',
//         name: '최지영',
//       },
//     ],
//   },
//   {
//     id: 2,
//     category: '할일',
//     title: '할일',
//     content: '000님이 1월 22일 예약하였습니다.',
//     updated_at: '2024-01-24',
//     readers: [
//       {
//         id: 12,
//         profile_picture: '',
//         name: '최지영',
//       },
//     ],
//   },
// ];

const NotificationsList = () => {
  const { activeCategory } = useNotificationCategories();
  const { data: notifications } = useQueryWithCredentials<Notification[]>(
    '/notifications',
    {
      category: activeCategory,
    }
  );

  if (!notifications) return <></>;

  const filtered = notifications.filter(
    (noti) => noti.category === activeCategory
  );
  return (
    <div className='w-full flex flex-wrap'>
      {filtered.map((noti, idx) => (
        <NotificationItem item={noti} key={idx} />
      ))}
      {/* {activeCategory !== '전체' &&
        filtered.map((noti, idx) => <NotificationItem item={noti} key={idx} />)} */}
      {notifications.length === 0 && (
        <EmptyDataNotice>알림이 없습니다</EmptyDataNotice>
      )}
    </div>
  );
};

export default NotificationsList;
