import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import Image from 'next/image';

const IconArrowDown = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      className={classNames}
      src='/icon/ic-arrow_down-24px.svg'
      alt='화살표 아래 방향 아이콘'
      width={18}
      height={18}
    />
  );
};

export default IconArrowDown;
