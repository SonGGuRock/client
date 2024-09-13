import { CraftSummary } from '@/app/entities/crafts/types';
import CraftItem from './craft-item';
import { useRouter } from 'next/navigation';

interface CraftFirstListProps {
  craftList: CraftSummary[];
  showCraftName?: boolean;
}

const CraftFirstList = ({
  craftList,
  showCraftName = false,
}: CraftFirstListProps) => {
  const router = useRouter();

  const handleClickItem = (craftId: number) => {
    router.push(`/crafts/${craftId}/detail`);
  };
  return (
    <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
      {craftList.map((craft) => (
        <CraftItem
          key={craft.id}
          craft={craft}
          onClick={() => {
            handleClickItem(craft.id);
          }}
          showCraftName={showCraftName}
        />
      ))}
    </div>
  );
};

export default CraftFirstList;
