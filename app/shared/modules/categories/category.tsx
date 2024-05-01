'use client';

import { clsx } from 'clsx';
import { Context } from 'react';
import { NotificationCategories } from './categories';
import useCategory from './lib/useCategory';
import { CategoryContext } from '@/app/_provider/craft-workstep-provider';
import { WorkStepType } from '../../atoms/work-step-label';

export interface CategoryProps {
  category: NotificationCategories['ko'];
  context: Context<
    | CategoryContext<NotificationCategories['ko'] | null>
    | CategoryContext<WorkStepType['ko'] | null>
  >;
}

const CategoryItem = ({ category, context }: CategoryProps) => {
  const { activeCategory, select } = useCategory(context);
  const classes = clsx(
    {
      'bg-brown': activeCategory === category,
      'text-white': activeCategory === category,
    },
    {
      'bg-grey100': activeCategory !== category,
      'text-grey500': activeCategory !== category,
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
      {category}
    </li>
  );
};

export default CategoryItem;
