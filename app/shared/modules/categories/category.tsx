'use client';

import { CATEGORY_MAP } from '@/app/entities/notifications/constants/subcategory';
import { NotificationCategoryKey } from '@/app/entities/notifications/types';
import useNotificationCategories from '@/app/widget/notifications/lib/useNotificationCategories';
import { clsx } from 'clsx';

export interface CategoryProps {
  category: NotificationCategoryKey;
  isActive: boolean;
}

const CategoryItem = ({ category, isActive }: CategoryProps) => {
  const { select } = useNotificationCategories();
  const classes = clsx(
    {
      'bg-brown': isActive === true,
      'text-white': isActive === true,
    },
    {
      'bg-grey100': isActive === false,
      'text-grey500': isActive === false,
    },
    'rounded-full',
    'py-1',
    'px-3',
    'text-xs',
    'whitespace-nowrap',
    'w-fit',
    'text-center'
  );
  return (
    <li
      onClick={() => {
        select(category);
      }}
      className={classes}
    >
      {CATEGORY_MAP[category]}
    </li>
  );
};

export default CategoryItem;
