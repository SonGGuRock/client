import Image from 'next/image';
import getImageWithFallback from '../lib/getImageWithFallback';

type ThumbnailProps = {
  id: number;
  imageUrl: string;
  type: 'member' | 'student' | 'teacher' | 'workshop' | 'craft';
  className?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => {};
};

const Thumbnail = ({
  id,
  imageUrl,
  name,
  type,
  size = 'small',
  className,
  onClick,
}: ThumbnailProps) => {
  return (
    <Image
      className={`block rounded-full  ${className}`}
      src={getImageWithFallback(imageUrl, `/img/default/${type}.png`)}
      alt={name || '유저 사진'}
      width={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      height={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
