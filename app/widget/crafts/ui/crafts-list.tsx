import { Craft } from '../api/type';
import CraftItem from './craft-item';

const craft_list: Craft[] = [
  {
    craft_id: '1',
    name: '작품명',
    updated_at: '2024-01-24',
    now_work_step: '삼벌',
    thumbnail: '',
    item_count: 1,
  },
];

const CraftsList = () => {
  return (
    <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
      {craft_list.map((craft) => (
        <CraftItem craftId={craft.craft_id} onClick={() => {}} />
      ))}
    </div>
  );
};

export default CraftsList;
