import { Context, useContext } from 'react';
import { CategoryContext } from '@/app/_provider/craft-workstep-provider';

const useCategory = <T>(
  context: Context<NotificationCategoryContext | null>
) => {
  const categoryStore = useContext(context);
  if (!categoryStore) {
    throw new Error('Catogory를 생성하는 Provider 내부에서 사용해야 합니다');
  }

  const { activeCategory, select } = categoryStore;

  return { activeCategory, select };
};

export default useCategory;
