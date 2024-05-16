'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import useSearchAddress from './search-address/useSearchAddress';

interface SearchBorderProps {
  placeholder?: string;
  onClickSearch: (keyword: string) => void;
}

const SearchBorder = ({ placeholder, onClickSearch }: SearchBorderProps) => {
  const [keyword, setKeyword] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className='relative mt-10'>
      <input
        value={keyword}
        placeholder={placeholder}
        className='w-full py-2 border-b-2 border-grey900'
        onChange={handleChange}
      />
      <Image
        src='/icon/ic-search-18px.svg'
        alt='돋보기 아이콘'
        width={24}
        height={24}
        className='absolute right-0 bottom-2'
        onClick={() => {
          onClickSearch(keyword);
        }}
      />
    </div>
  );
};

export default SearchBorder;
