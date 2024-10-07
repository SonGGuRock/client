'use client';

import { SUBCATEGORY_MAP } from '@/app/entities/notifications/constants/subcategory';
import {
  Notification,
  SubcategoryItem,
  SubcategoryKey,
} from '@/app/entities/notifications/types';
import useCreate from '@/app/shared/api/useCreate';
import { clsx } from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NotificationItemProps {
  item: Notification;
}
const NotificationItem = ({
  item: {
    id,
    category,
    sub_category,
    content,
    updated_at,
    readers,
    redirect_id,
    is_read,
  },
}: NotificationItemProps) => {
  const router = useRouter();
  const { post } = useCreate({
    path: `notifications/${id}`,
    revalidate: true,
    revalidatePath: 'notifications',
  });

  const isValidSubcategoryKey = (key: string): key is SubcategoryKey => {
    return key in SUBCATEGORY_MAP;
  };

  const getRedirectUrl = (key: SubcategoryKey, id?: number) => {
    const redirectUrl = SUBCATEGORY_MAP[key].redirectUrl;
    if (typeof redirectUrl === 'function') {
      return redirectUrl(id);
    }

    return redirectUrl;
  };

  const getSubcategoryInfo = (key: SubcategoryKey): SubcategoryItem => {
    return SUBCATEGORY_MAP[key];
  };

  function getDisplayTitle(subcategory: string): string {
    return isValidSubcategoryKey(subcategory)
      ? getSubcategoryInfo(subcategory).title
      : '미정';
  }

  const handleClick = (subCategory: string, redirectId: number) => {
    if (isValidSubcategoryKey(subCategory)) {
      is_read === false && post();
      const url = getRedirectUrl(subCategory, redirectId);
      router.push(url);
    }
  };

  return (
    <div
      className={clsx(
        'py-3 w-full flex flex-wrap gap-2',
        is_read && 'opacity-50'
      )}
      onClick={() => {
        handleClick(sub_category, redirect_id);
      }}
    >
      <div>
        <span className='text-xs font-bold text-grey900'>
          {getDisplayTitle(sub_category)}
        </span>
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
