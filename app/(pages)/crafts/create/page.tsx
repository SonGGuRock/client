import CraftCreateProvider from '@/app/_provider/craft-create-provide';
import CraftCreatePage from '@/app/pages/crafts/craft-create-page';

const Page = () => {
  return (
    <CraftCreateProvider>
      <CraftCreatePage />
    </CraftCreateProvider>
  );
};

export default Page;
