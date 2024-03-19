import Image from 'next/image';

type ThumbnailProps = {
  userId: number;
  userName?: string;
  isSmall?: boolean;
  onClick?: () => {};
};

const Thumbnail = ({
  userId,
  userName,
  isSmall = true,
  onClick,
}: ThumbnailProps) => {
  return (
    <Image
      className='rounded-full h-8 w-8'
      src='/mock/user/img_user.png'
      alt={userName || '유저 사진'}
      width={32}
      height={32}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
