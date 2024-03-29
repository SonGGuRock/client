import Image from 'next/image';

type ThumbnailProps = {
  id: number;
  name?: string;
  size?: 'small' | 'large';
  onClick?: () => {};
};

const Thumbnail = ({ id, name, size = 'small', onClick }: ThumbnailProps) => {
  return (
    <Image
      className={`block rounded-full ${
        size === 'small' ? 'h-8 w-8' : 'h-18 w-18'
      }`}
      src='/img/student_default.png'
      alt={name || '유저 사진'}
      width={size === 'small' ? 32 : 72}
      height={size === 'small' ? 32 : 72}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
