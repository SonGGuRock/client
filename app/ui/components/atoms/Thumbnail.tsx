type ThumbnailProps = {
  userId: number;
  userName: string;
  isSmall?: boolean;
};

const Thumbnail = ({ userId, userName, isSmall = true }: ThumbnailProps) => {
  return (
    <img
      className='rounded-full h-8 w-8'
      src='/mock/user/img_user.png'
      alt={userName}
    />
  );
};

export default Thumbnail;
