import { Announcment } from '@/app/widget/announcements/lib/type';
import IconNoticeFill from '../atoms/icons/icon-notice-fill';
import formatDateString from '../lib/formatDateString';
import Thumbnail from '../atoms/Thumbnail';
import isDefaultProfilePicture from '../lib/isDefaultImage';

export type ArticleProps = {
  content: Announcment;
};

const Article = ({ content }: ArticleProps) => {
  return (
    <div className='border-b pb-4 mt-4'>
      <h4 className='text-xl mb-4 font-bold flex gap-2'>
        {content.is_representative_announcement && <IconNoticeFill />}
        {content.title}
      </h4>

      <p className='text-sm text-grey300'>
        <div className='flex gap-2'>
          <Thumbnail
            id={content.author.id}
            imageUrl={
              isDefaultProfilePicture(content.author.profile_picture)
                ? '/img/teacher-charactar.png'
                : content.author.profile_picture
            }
          />
          <div className='w-full flex flex-wrap text-base text-grey900'>
            <p className='w-full'>{content.author.name}</p>
            <p className='text-grey400 text-xs'>
              {content &&
                formatDateString({
                  fullDateString: content.updated_at,
                  options: {
                    includeHours: false,
                    includeMinutes: false,
                  },
                })}
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Article;
