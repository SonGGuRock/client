import Image from 'next/image';
import { IconProps } from './type';

const IconCopy = ({ width, height, className }: IconProps) => (
  <Image
    src='/icon/ic-copy-18px.svg'
    alt='복사 아이콘'
    width={width ?? 18}
    height={height ?? 18}
    className={className}
  />
);

export default IconCopy;
