'use client';
import { ReactNode, createContext, useState } from 'react';
import { NotificationCategories } from '../shared/modules/categories/categories';
import { CategoryContext } from './craft-workstep-provider';

// export type NotificationCategoryContext = {
//   activeCategory: NotificationCategories['ko'];
//   select: (categoryName: NotificationCategories['ko']) => void;
// };

export const NotificationContext = createContext<CategoryContext<
  NotificationCategories['ko']
> | null>(null);
export default function NotificationCategoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeCategory, select] = useState<
    NotificationCategories['ko'] | null
  >('전체');

  return (
    <NotificationContext.Provider value={{ activeCategory, select }}>
      {children}
    </NotificationContext.Provider>
  );
}
