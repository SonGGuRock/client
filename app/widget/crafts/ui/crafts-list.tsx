import { CraftSummary } from '@/app/entities/crafts/types';
import CraftItem from './craft-item';

const craft_list: CraftSummary[] = [
  {
    id: 1,
    name: '작품명',
    updated_at: '2024-01-24',
    now_work_step: 'bisque_fire',
    thumbnail: '',
    item_count: 1,
  },
];

const CraftsList = () => {
  return (
    <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
      {craft_list.map((craft) => (
        <CraftItem key={craft.id} craft={craft} onClick={() => {}} />
      ))}
    </div>
  );
};

export default CraftsList;
