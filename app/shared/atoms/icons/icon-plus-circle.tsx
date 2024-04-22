import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconPlusCircle = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      src='/icon/ic-add-circle.svg'
      alt='추가 아이콘'
      className={classNames}
      width={40}
      height={40}
    />
  );
};

export default IconPlusCircle;
