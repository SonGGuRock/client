import CraftItemMutateProvider from '@/app/_provider/craft-item-create-provider';
import CraftItemEditDetail from '@/app/widget/crafts/ui/craft-item-edit-detail';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const craftId = params.id as string;
  // const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
  //   `/crafts/items/${craftId}`
  // );
  // if (!craftDetail) return <div>loading now</div>;
  // const { comments, items, student, ...rest } = craftDetail;

  return (
    <CraftItemMutateProvider>
      <div>hi</div>
      {/* <CraftItemEditDetail craftDetail={rest} /> */}
    </CraftItemMutateProvider>
  );
};

export default Page;
