import Image from 'next/image';

interface SearchBorderProps {
  placeholder?: string;
}

const SearchBorder = ({ placeholder }: SearchBorderProps) => {
  return (
    <div className='relative mt-10'>
      <input
        placeholder={placeholder}
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
