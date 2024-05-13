import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import CraftThumbnail from './craft-thumbnail';
import CheckBox from '@/app/shared/atoms/CheckBox';

interface CraftItemProps extends ClassNamesProps {
  craftId: string;
  onClick: (id: string) => void;
  isEditMode?: boolean;
  isChecked?: boolean;
}

const CraftItem = ({
  craftId,
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
      onClick={() => onClick(craftId)}
    >
      <CraftThumbnail
        workstep='성형'
        imgUrl='/img/craft_default.png'
        craftId={craftId}
        classNames='w-full h-[108px] mb-2'
      />
      <p className='text-sm text-grey900'>한선민</p>
      <p className='text-sm text-grey400'>5</p>
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
