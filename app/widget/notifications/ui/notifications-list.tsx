'use client';

import useNotificationCategories from '../lib/useNotificationCategories';
import NotificationItem, { Notification } from './notification-item';

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    category: '예약',
    title: '새로운 예약',
    content: '000님이 1월 22일 예약하였습니다.',
    updated_at: '2024-01-24',
    readers: [
      {
        id: 12,
        profile_picture: '',
        name: '최지영',
      },
    ],
  },
  {
    id: 2,
    category: '할일',
    title: '할일',
    content: '000님이 1월 22일 예약하였습니다.',
    updated_at: '2024-01-24',
    readers: [
      {
        id: 12,
        profile_picture: '',
        name: '최지영',
      },
    ],
  },
];

const NotificationsList = () => {
  const { activeCategory } = useNotificationCategories();

  const filtered = NOTIFICATIONS.filter(
    (noti) => noti.category === activeCategory
  );
  return (
    <div className='w-full flex flex-wrap'>
      {activeCategory === '전체' &&
        NOTIFICATIONS.map((noti, idx) => (
          <NotificationItem item={noti} key={idx} />
        ))}
      {activeCategory !== '전체' &&
        filtered.map((noti, idx) => <NotificationItem item={noti} key={idx} />)}
    </div>
  );
};

export default NotificationsList;
