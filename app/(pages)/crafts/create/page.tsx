import CraftCreateProvider from '@/app/_provider/craft-create-provide';
import CraftItemCreateProvider from '@/app/_provider/craft-item-create-provider';
import CraftCreatePage from '@/app/pages/crafts/craft-create-page';

const Page = () => {
  return (
    <CraftCreateProvider>
      <CraftItemCreateProvider>
        <CraftCreatePage />
      </CraftItemCreateProvider>
    </CraftCreateProvider>
  );
};

export default Page;
