import {
  CraftSummary,
  CraftSummaryForStudent,
} from '@/app/entities/crafts/types';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import CraftThumbnail from './craft-thumbnail';
import CheckBox from '@/app/shared/atoms/CheckBox';

interface CraftItemProps extends ClassNamesProps {
  craft: CraftSummary;
  onClick: (id: number, itemId: number, craftName?: string) => void;
  showCraftName?: boolean;
  isEditMode?: boolean;
  isChecked?: boolean;
}

const CraftItem = ({
  craft,
  showCraftName = true,
  isEditMode = false,
  isChecked = false,
  onClick,
}: CraftItemProps) => {
  const isCraftSummary = (
    craft: CraftSummary | CraftSummaryForStudent
  ): craft is CraftSummary => {
    return (craft as CraftSummary).item_count !== undefined;
  };

  return (
    <div
      className={`${isEditMode && 'relative'}`}
      onClick={() => onClick(craft.id, craft.now_craft_item!, craft.name)}
    >
      <CraftThumbnail
        classNames='w-full h-[108px] mb-2'
        craft={craft}
        showWorkStatus={true}
      />

      {showCraftName ? (
        <p className='text-sm text-grey900'>{craft.name}</p>
      ) : (
        <p className='text-sm text-grey900'>{craft.student_name}</p>
      )}
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
