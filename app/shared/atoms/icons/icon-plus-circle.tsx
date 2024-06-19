import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconPlusCircle = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      src='/icon/ic-plus-circle-24px.svg'
      alt='추가 아이콘'
      className={classNames}
      width={24}
      height={24}
    />
  );
};

export default IconPlusCircle;
