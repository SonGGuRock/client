'use client';

import { NotificationCategories } from '@/app/shared/modules/categories/categories';
import { clsx } from 'clsx';
import { useState } from 'react';

export type Notification = {
  id: number;
  category: NotificationCategories['ko'];
  title: string;
  content: string;
  updated_at: string;
  readers: [
    {
      id: number;
      profile_picture: string;
      name: string;
    }
  ];
};

interface NotificationItemProps {
  item: Notification;
}
const NotificationItem = ({
  item: { id, category, title, content, updated_at, readers },
}: NotificationItemProps) => {
  const [isRead, setIsRead] = useState(false);
  const handleClick = () => {
    setIsRead(true);
    // readers에 추가
  };
  return (
    <div
      className={clsx(
        'py-3 w-full flex flex-wrap gap-2',
        isRead && 'opacity-50'
      )}
      onClick={handleClick}
    >
      <div>
        <span className='text-xs font-bold text-grey900'>{title}</span>
        <span className='text-grey500 text-xs'> ・ {updated_at}분 전</span>
      </div>
      <div className='w-full flex justify-between items-center'>
        <span className='text-sm text-grey700'>{content}</span>
        <span className='text-grey500 text-xs'>읽음 {readers.length}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
