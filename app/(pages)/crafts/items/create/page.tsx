import CraftItemCreateProvider from '@/app/_provider/craft-item-create-provider';
import CraftItemCreatePage from '@/app/pages/crafts/items/craft-item-create.page';

const Page = () => {
  return (
    <CraftItemCreateProvider>
      <CraftItemCreatePage />
    </CraftItemCreateProvider>
  );
};

export default Page;
