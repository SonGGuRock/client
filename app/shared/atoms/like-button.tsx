import Image from 'next/image';

interface LikeButtonProps {
  isLiked: boolean;
  toggleLike: () => void;
}

const LikeButton = ({ isLiked, toggleLike }: LikeButtonProps) => {
  return (
    <Image
      src={
        isLiked
          ? '/icon/ic-heart-fill-18px.svg'
          : '/icon/ic-heart-empty-18px.svg'
      }
      alt='하트 모양 아이콘'
      width={18}
      height={18}
      onClick={toggleLike}
      className='cursor-pointer'
    />
  );
};

export default LikeButton;
