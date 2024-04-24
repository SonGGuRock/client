'use client';

import { clsx } from 'clsx';
import { Category } from './categories';
import useNotificationCategories from '@/app/widget/notifications/lib/useNotificationCategories';

interface CategoryProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryProps) => {
  const { activeCategory, toggleCategory } = useNotificationCategories();
  const classes = clsx(
    {
      'bg-brown': activeCategory === category.ko,
      'text-white': activeCategory === category.ko,
    },
    {
      'bg-grey100': activeCategory !== category.ko,
      'text-grey500': activeCategory !== category.ko,
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
        toggleCategory(category.ko);
      }}
      className={classes}
    >
      {category.ko}
    </li>
  );
};

export default CategoryItem;
