'use client';

const students = ['최지영', '최은지', '한선민'];

import { makeRegexByCho } from '@/app/widget/students/lib/search-by-initial-consonant';
import { ChangeEvent, useState } from 'react';

type InputProps = {
  placeholder: string;
  classNames?: string;
};

const Input = ({ placeholder, classNames }: InputProps) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const search = e.target.value.trim();
    const regex = makeRegexByCho(search);

    students.forEach((name) => {
      if (regex.test(name)) {
        console.log(`${name}이 검색되었어요`);
      }
    });
  };
  return (
    <input
      value={keyword}
      className={`inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700 ${classNames}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
