import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconPlusCircleGray = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      src='/icon/ic-add-circle.svg'
      alt='추가 아이콘'
      className={classNames}
      width={24}
      height={24}
    />
  );
};

export default IconPlusCircleGray;
