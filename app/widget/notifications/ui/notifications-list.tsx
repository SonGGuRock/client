'use client';

import { Notification } from '@/app/entities/notifications/types';
import useNotificationCategories from '../lib/useNotificationCategories';
import NotificationItem from './notification-item';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';
import Categories from '@/app/shared/modules/categories/categories';
import { CATEGORY_MAP } from '@/app/entities/notifications/constants/subcategory';

const NotificationsList = () => {
  const { activeCategory } = useNotificationCategories();
  const { data: notifications } = useQueryWithCredentials<Notification[]>(
    '/notifications',
    {
      category: activeCategory ?? 'all',
    }
  );

  if (!notifications) return <></>;

  const filtered =
    activeCategory === 'all'
      ? notifications
      : notifications.filter((noti) => noti.category === activeCategory);
  return (
    <div>
      <Categories
        classNames='mt-4 mb-5'
        categories={CATEGORY_MAP}
        activeCategory={activeCategory ?? 'all'}
      />

      <div className='w-full flex flex-wrap'>
        {filtered.map((noti, idx) => (
          <NotificationItem item={noti} key={idx} />
        ))}
        {notifications.length === 0 && (
          <EmptyDataNotice>알림이 없습니다</EmptyDataNotice>
        )}
      </div>
    </div>
  );
};

export default NotificationsList;
