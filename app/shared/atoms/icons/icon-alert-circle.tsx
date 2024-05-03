import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconAlertCircle = ({ classNames }: ClassNamesProps) => {
  return (
    <Image
      src='/icon/ic-alert-circle-48px.png'
      alt='경고 아이콘'
      width={48}
      height={48}
      className={classNames}
    />
  );
};

export default IconAlertCircle;
