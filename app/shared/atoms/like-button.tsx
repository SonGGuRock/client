import Image from 'next/image';
import useToggle from '../lib/useToggle';

const LikeButton = () => {
  const { open: isLiked, toggle } = useToggle();

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
      onClick={toggle}
    />
  );
};

export default LikeButton;
