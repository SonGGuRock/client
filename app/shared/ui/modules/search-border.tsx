import Image from 'next/image';

const SearchBorder = () => {
  return (
    <div className='relative mt-10'>
      <input
        placeholder='공방 이름을 검색해주세요'
        className='w-full py-2 border-b-2 border-grey900'
      />
      <Image
        src='/icon/ic-search-18px.svg'
        alt='돋보기 아이콘'
        width={24}
        height={24}
        className='absolute right-0 bottom-2'
      />
    </div>
  );
};

export default SearchBorder;
