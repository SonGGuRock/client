import Image from 'next/image';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

const IconNoticeFill = ({ classNames }: ClassNamesProps) => (
  <Image
    src='/icon/ic-notice-fill-24px.svg'
    alt='icon of the notice'
    width={24}
    height={24}
    className={`${classNames}`}
  />
);

export default IconNoticeFill;
