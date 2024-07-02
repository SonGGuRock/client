import Image from 'next/image';

type ThumbnailProps = {
  id: number;
  imageUrl: string;
  className?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => {};
};

const Thumbnail = ({
  id,
  imageUrl,
  name,
  size = 'small',
  className,
  onClick,
}: ThumbnailProps) => {
  return (
    <Image
      className={`block rounded-full  ${className}`}
      src={`${imageUrl ?? '/img/student_default.png'}`}
      alt={name || '유저 사진'}
      width={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      height={size === 'small' ? 32 : size === 'medium' ? 56 : 72}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
