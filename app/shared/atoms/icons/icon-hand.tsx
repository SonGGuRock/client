import Image from 'next/image';
import { IconProps } from './type';

const IconHand = ({ width, height, className }: IconProps) => (
  <Image
    src='/icon/ic-hand-circle-32px.svg'
    alt='핸드빌딩 아이콘'
    width={width ?? 32}
    height={height ?? 32}
    className={className}
  />
);

export default IconHand;
