import Image from 'next/image';
import { ChangeEvent } from 'react';

interface SearchBorderProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch?: () => void;
}

const SearchBorder = ({
  placeholder,
  onChange,
  onClickSearch,
}: SearchBorderProps) => {
  return (
    <div className='relative mt-10'>
      <input
        placeholder={placeholder}
        className='w-full py-2 border-b-2 border-grey900'
        onChange={onChange}
      />
      <Image
        src='/icon/ic-search-18px.svg'
        alt='돋보기 아이콘'
        width={24}
        height={24}
        className='absolute right-0 bottom-2'
        onClick={onClickSearch}
      />
    </div>
  );
};

export default SearchBorder;
