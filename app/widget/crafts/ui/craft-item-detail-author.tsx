import Thumbnail from '@/app/shared/atoms/Thumbnail';

const CraftItemDetailAuthor = () => {
  return (
    <div className='w-full flex gap-2 items-center mt-6 mb-4'>
      <Thumbnail id={1} className='w-10 h-10' />
      <div className='flex flex-wrap w-full gap-1'>
        <p className='w-full text-base text-grey900'>최지영</p>
        <p className='w-full text-xs text-grey400'>2024-02-24 13:03</p>
      </div>
    </div>
  );
};

export default CraftItemDetailAuthor;
