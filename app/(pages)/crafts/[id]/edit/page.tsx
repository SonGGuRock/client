import CraftItemCreateProvider from '@/app/_provider/craft-item-create-provider';
import CraftItemEditDetail from '@/app/widget/crafts/ui/craft-item-edit-detail';

const Page = () => {
  return (
    <CraftItemCreateProvider>
      <CraftItemEditDetail />
    </CraftItemCreateProvider>
  );
};

export default Page;
