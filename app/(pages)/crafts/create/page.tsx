import CraftCreateProvider from '@/app/_provider/craft-create-provide';
import CraftItemMutateProvider from '@/app/_provider/craft-item-create-provider';
import CraftCreatePage from '@/app/pages/crafts/craft-create-page';

const Page = () => {
  return (
    <CraftCreateProvider>
      <CraftItemMutateProvider>
        <CraftCreatePage />
      </CraftItemMutateProvider>
    </CraftCreateProvider>
  );
};

export default Page;
