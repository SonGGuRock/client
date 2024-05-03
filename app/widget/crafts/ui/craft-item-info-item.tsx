import { PropsWithChildren } from 'react';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';

interface CraftItemInfoItemProps extends ClassNamesProps, PropsWithChildren {
  labelText: string;
}

const CraftItemInfoItem = ({
  classNames,
  children,
  labelText,
}: CraftItemInfoItemProps) => {
  return (
    <div className={`flex gap-2 ${classNames}`}>
      <span className='py-1 px-2 bg-grey100 text-grey500 rounded-lg text-xs'>
        {labelText}
      </span>

      <span className='text-grey700 text-xs flex items-center gap-1'>
        {children}
      </span>
    </div>
  );
};

export default CraftItemInfoItem;
