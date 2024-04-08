'use client';

import { ChangeEvent, useState } from 'react';
import { makeRegexByCho } from './search-by-initial-consonant';

const useSearchByInitial = () => {
  const students = ['김철수', '김민수', '최지연', '최지민', '채은아'];

  const [searched, setSearched] = useState(students);
  const [keyword, setKeyword] = useState('');

  const handleSearch = (newStudents: string[]) => {
    setSearched(newStudents);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const search = e.target.value.trim();
    const matched: string[] = [];

    students.forEach((name) => {
      const regex = makeRegexByCho(search);
      const isMatched = regex.test(name);
      if (isMatched) {
        matched.push(name);
      }
    });

    handleSearch(matched);
  };

  return { searched, keyword, handleChange };
};

export default useSearchByInitial;
