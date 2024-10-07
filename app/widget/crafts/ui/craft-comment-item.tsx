import { Comment } from '@/app/entities/crafts/types';
import useDelete from '@/app/shared/api/useDelete';
import Thumbnail from '@/app/shared/atoms/Thumbnail';
import formatDateString from '@/app/shared/lib/formatDateString';
import CraftCommentLike from './craft-comment-like';

interface CraftCommentItemProps {
  itemId: string;
  comment: Comment;
}

const CraftCommentItem = ({ comment, itemId }: CraftCommentItemProps) => {
  const { remove } = useDelete({
    path: `/crafts/items/comments/${comment.id}`,
    revalidate: true,
    revalidatePath: `/crafts/items/${itemId}`,
  });

  const handleDeleteComment = () => {
    remove();
  };
  return (
    <li className='flex gap-2 items-start w-full'>
      <Thumbnail
        id={comment.author.id}
        imageUrl={comment.author.profile_picture}
        type='member'
      />
      <div className='w-full flex flex-wrap gap-1'>
        <p className='flex'>
          <span className='mr-2 text-grey900 text-xs font-bold'>
            {comment.author.name}
          </span>
          <span className='text-grey400 text-xs'>
            {formatDateString({ fullDateString: comment.updated_at })}
          </span>
          {/* <span className='ml-1 text-grey400 text-xs'>03:30</span> */}
        </p>
        <p className='w-full flex gap-6'>
          <span className=' w-full flex flex-wrap gap-2 items-center'>
            <span className='text-grey900 text-sm'>{comment.content}</span>
            <span
              className='text-grey400 text-xs'
              onClick={handleDeleteComment}
            >
              삭제하기{' '}
            </span>
          </span>
        </p>
      </div>
      <span className='flex flex-wrap justify-center items-stretch'>
        <CraftCommentLike commentId={comment.id} isLiked={comment.is_liked} />
        <span className='text-grey400 text-xs font-bold'>
          {comment.like_count}
        </span>
      </span>
    </li>
  );
};

export default CraftCommentItem;
