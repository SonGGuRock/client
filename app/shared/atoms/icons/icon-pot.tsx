import Image from 'next/image';
import { IconProps } from './type';

const IconPot = ({ width, height, className }: IconProps) => (
  <Image
    src='/icon/ic-pot-circle-32px.svg'
    alt='물레 아이콘'
    width={width ?? 32}
    height={height ?? 32}
    className={className}
  />
);

export default IconPot;
