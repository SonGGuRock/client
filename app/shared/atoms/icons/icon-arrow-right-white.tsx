import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconArrowRightWhite = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      className={classNames}
      src='/icon/ic-arrow_right-24px.svg'
      alt='화살표 오른쪽 방향 아이콘'
      width={24}
      height={24}
    />
  );
};

export default IconArrowRightWhite;
