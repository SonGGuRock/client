'use client';
import CraftItemMutateProvider from '@/app/_provider/craft-item-create-provider';
import CraftItemEditPage from '@/app/pages/crafts/item/craft-item-edit-page';

const Page = () => {
  return (
    <CraftItemMutateProvider>
      <CraftItemEditPage />
    </CraftItemMutateProvider>
  );
};

export default Page;
