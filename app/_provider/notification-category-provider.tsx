'use client';
import { ReactNode, createContext, useState } from 'react';
import { CategoryContext } from './craft-workstep-provider';
import { NotificationCategories } from '../entities/notifications/types';

// export type NotificationCategoryContext = {
//   activeCategory: NotificationCategories['en'];
//   selectCategroy: (categoryName: NotificationCategories['en']) => void;
// };

export const NotificationContext = createContext<CategoryContext<
  NotificationCategories['en']
> | null>(null);

export default function NotificationCategoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeCategory, select] = useState<
    NotificationCategories['en'] | null
  >('all');

  return (
    <NotificationContext.Provider value={{ activeCategory, select }}>
      {children}
    </NotificationContext.Provider>
  );
}
