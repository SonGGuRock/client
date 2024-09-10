import { CraftSummary } from '@/app/entities/crafts/types';
import CraftItem from './craft-item';

interface CraftFirstListProps {
  craftList: CraftSummary[];
}

const CraftFirstList = ({ craftList }: CraftFirstListProps) => {
  return (
    <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
      {craftList.map((craft) => (
        <CraftItem
          key={craft.id}
          craft={craft}
          onClick={() => {}}
          showCraftName={false}
        />
      ))}
    </div>
  );
};

export default CraftFirstList;
