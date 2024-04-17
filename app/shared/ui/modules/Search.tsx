'use client';

import Input from '@/app/shared/ui/atoms/Input';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { ChangeEvent } from 'react';

interface SearchByInitialConsonantProps {
  keyword: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({
  keyword,
  handleChange,
  classNames,
}: SearchByInitialConsonantProps & ClassNamesProps) => {
  return (
    <Input
      value={keyword}
      placeholder='검색'
      classNames={`bg-search-icon bg-no-repeat bg-[8px] pl-8 ${classNames}`}
      onChange={handleChange}
    />
  );
};

export default Search;
