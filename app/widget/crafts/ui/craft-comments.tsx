'use client';

import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import { useParams } from 'next/navigation';
import { useQueryWithCredentials } from '../../../shared/api/fetch-with-credentials';
import { CraftItemDetail } from '@/app/entities/crafts/types';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';
import CraftCommentInput from './craft-comment-input';
import CraftCommentItem from './craft-comment-item';

const CraftComments = ({ classNames }: ClassNamesProps) => {
  const params = useParams();
  const itemId = params['itemId'] as string;
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${itemId}`
  );

  if (!craftDetail) return <></>;
  const { comments } = craftDetail;
  return (
    <div className={classNames}>
      <p className='text-grey900 text-sm font-semibold mb-4'>
        댓글 {comments.length}
      </p>

      <CraftCommentInput />
      {comments.length === 0 && (
        <EmptyDataNotice>첫 댓글을 달아보세요!</EmptyDataNotice>
      )}
      <ul className='w-full flex flex-wrap gap-6 mt-4'>
        {comments.length !== 0 &&
          comments.map((comment) => (
            <CraftCommentItem
              key={comment.id}
              comment={comment}
              itemId={itemId}
            />
          ))}
      </ul>
    </div>
  );
};

export default CraftComments;
