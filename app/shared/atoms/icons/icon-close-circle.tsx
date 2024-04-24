import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconCloseCircle = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      className={classNames}
      src='/icon/ic-close-circle-18px.svg'
      alt='삭제 아이콘'
      width={18}
      height={18}
    />
  );
};

export default IconCloseCircle;
