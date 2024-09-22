import useCreate from '@/app/shared/api/useCreate';
import LikeButton from '@/app/shared/atoms/like-button';
import { useParams } from 'next/navigation';

interface CraftCommentLikeProps {
  commentId: number;
  isLiked: boolean;
}

const CraftCommentLike = ({ commentId, isLiked }: CraftCommentLikeProps) => {
  const params = useParams();
  const itemId = params['itemId'];

  const { post } = useCreate({
    path: `/crafts/items/comments/${commentId}/like`,
    revalidate: true,
    revalidatePath: `/crafts/items/${itemId}`,
  });

  const handleToggleLike = () => {
    post(undefined);
  };
  return <LikeButton isLiked={isLiked} toggleLike={handleToggleLike} />;
};

export default CraftCommentLike;
