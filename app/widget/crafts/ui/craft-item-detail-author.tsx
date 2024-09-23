import { AuthorStudent } from '@/app/entities/crafts/types';
import Thumbnail from '@/app/shared/atoms/Thumbnail';
import { formatDate } from '@/app/shared/lib/formatDate';
import formatDateString from '@/app/shared/lib/formatDateString';

interface CraftItemDetailAuthor {
  author: AuthorStudent;
  updatedAt: string;
}

const CraftItemDetailAuthor = ({
  author,
  updatedAt,
}: CraftItemDetailAuthor) => {
  return (
    <div className='w-full flex gap-2 items-center mt-6 mb-4'>
      <Thumbnail
        id={author.id}
        className='w-10 h-10'
        imageUrl={author.profile_picture}
        type='member'
      />
      <div className='flex flex-wrap w-full gap-1'>
        <p className='w-full text-base text-grey900'>{author.name}</p>
        <p className='w-full text-xs text-grey400'>
          {formatDateString({ fullDateString: updatedAt })}
        </p>
      </div>
    </div>
  );
};

export default CraftItemDetailAuthor;
