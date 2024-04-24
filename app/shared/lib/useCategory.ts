import { useState } from 'react';
import { Category } from '../modules/categories/categories';

const useCategory = () => {
  const [activeCategory, SetActiveCategory] = useState<Category['ko']>('전체');
  const toggleCategory = (categoryName: Category['ko']) => {
    SetActiveCategory(categoryName);
  };

  return { activeCategory, toggleCategory };
};

export default useCategory;
