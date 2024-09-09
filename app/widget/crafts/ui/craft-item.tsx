import { CraftSummary } from '@/app/entities/crafts/types';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import CraftThumbnail from './craft-thumbnail';
import CheckBox from '@/app/shared/atoms/CheckBox';

interface CraftItemProps extends ClassNamesProps {
  craft: CraftSummary;
  onClick: (id: number, name: string) => void;
  isEditMode?: boolean;
  isChecked?: boolean;
}

const CraftItem = ({
  craft,
  isEditMode = false,
  isChecked = false,
  onClick,
}: CraftItemProps) => {
  return (
    // <li className='flex justify-center items-center rounded-lg h-full'>
    //   <CraftItemWorkstep workstep='초벌' />
    // </li>
    <div
      className={`${isEditMode && 'relative'}`}
      onClick={() => onClick(craft.id, craft.name)}
    >
      <CraftThumbnail
        classNames='w-full h-[108px] mb-2'
        craft={craft}
        showWorkStatus={false}
      />
      <p className='text-sm text-grey900'>{craft.name}</p>
      <p className='text-sm text-grey400'>{craft.item_count}</p>
      {isEditMode && (
        <p className='absolute right-1 bottom-12'>
          <CheckBox
            style='grey'
            classNames=' bg-grey900'
            isChecked={isChecked}
          />
        </p>
      )}
    </div>
  );
};

export default CraftItem;
