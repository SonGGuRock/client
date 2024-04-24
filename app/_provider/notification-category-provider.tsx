'use client';
import { ReactNode, createContext } from 'react';
import useCategory from '../shared/lib/useCategory';
import { Category } from '../shared/modules/categories/categories';

type NotificationCategoryContext = {
  activeCategory: Category['ko'];
  toggleCategory: (categoryName: Category['ko']) => void;
};

export const NotificationContext =
  createContext<NotificationCategoryContext | null>(null);

export default function NotificationCategoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { activeCategory, toggleCategory } = useCategory();

  return (
    <NotificationContext.Provider value={{ activeCategory, toggleCategory }}>
      {children}
    </NotificationContext.Provider>
  );
}
