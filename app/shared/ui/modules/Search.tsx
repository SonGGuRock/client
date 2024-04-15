'use client';

import Input from '@/app/shared/ui/atoms/Input';
import { ChangeEvent } from 'react';

interface SearchByInitialConsonantProps {
  className?: string;
  keyword: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({
  className,
  keyword,
  handleChange,
}: SearchByInitialConsonantProps) => {
  return (
    <Input
      value={keyword}
      placeholder='검색'
      classNames={`bg-search-icon bg-no-repeat bg-[8px] pl-8 ${className}`}
      onChange={handleChange}
    />
  );
};

export default Search;
