import { AnnouncmentRepresentitive } from '@/app/widget/announcements/lib/type';
import IconNoticeFill from '../atoms/icons/icon-notice-fill';
import formatDateString from '../lib/formatDateString';

export type ArtilcePreviewProps = {
  content: AnnouncmentRepresentitive;
};

const ArticlePreview = ({ content }: ArtilcePreviewProps) => {
  return (
    <div className='border-b pb-4'>
      <h4 className='text-base mb-1 flex gap-2'>
        {content.is_representative_announcement && <IconNoticeFill />}
        {content.title}
      </h4>

      <p className='text-grey400 text-xs'>
        {content && content.updated_at.slice(0, 10)}
      </p>
    </div>
  );
};

export default ArticlePreview;
