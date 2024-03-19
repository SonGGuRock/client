export type ArtilcePreview = {
  title: string;
  updated_at: string;
  size?: 'small' | 'large';
};

const ArtilcePreview = ({
  title,
  updated_at,
  size = 'small',
}: ArtilcePreview) => {
  return (
    <div className='border-b pb-4'>
      <h4 className={`${size === 'large' ? 'text-base' : 'text-sm'} mb-1`}>
        {title}
      </h4>
      <p className={`${size === 'large' ? 'text-sm' : 'text-xs'} text-grey300`}>
        {updated_at}
      </p>
    </div>
  );
};

export default ArtilcePreview;
