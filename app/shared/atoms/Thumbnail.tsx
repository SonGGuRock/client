import Image from 'next/image';

type ThumbnailProps = {
  id: number;
  className?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => {};
};

const Thumbnail = ({
  id,
  name,
  size = 'small',
  className,
  onClick,
}: ThumbnailProps) => {
  return (
    <Image
      className={`block rounded-full ${
        size === 'small' ? 'h-8 w-8' : 'h-18 w-18'
      } ${className}`}
      src='/img/student_default.png'
      alt={name || '유저 사진'}
      width={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      height={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
