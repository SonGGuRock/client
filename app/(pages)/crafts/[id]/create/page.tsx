import CraftCreateProvider from '@/app/_provider/craft-create-provide';
import CraftItemMutateProvider from '@/app/_provider/craft-item-create-provider';
import CraftItmeCreatePage from '@/app/pages/crafts/craft-item-create-page';

const Page = () => {
  return (
    <CraftCreateProvider>
      <CraftItemMutateProvider>
        <CraftItmeCreatePage />
      </CraftItemMutateProvider>
    </CraftCreateProvider>
  );
};

export default Page;
