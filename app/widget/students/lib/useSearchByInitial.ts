'use client';

import { ChangeEvent, useState } from 'react';
import { makeRegexByCho } from './search-by-initial-consonant';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { Student } from '@/app/lib-temp/definition';

type StudentSearchParams = {
  active?: 0 | 1;
  sort?: 'count' | 'name' | 'register_date';
};

interface useSearchByInitialProps {
  params: StudentSearchParams;
}
// const students = useQueryWithCredentials<Student[]>('students', {
//   active,
//   sort,
// });

const useSearchByInitial = (students: Student[]) => {
  const [searched, setSearched] = useState(students);
  const [keyword, setKeyword] = useState('');

  const handleSearch = (newStudents: Student[]) => {
    setSearched(newStudents);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const search = e.target.value.trim();
    const matched: Student[] = [];

    students?.forEach((student) => {
      const regex = makeRegexByCho(search);
      const isMatched = regex.test(student.name);
      if (isMatched) {
        matched.push(student);
      }
    });

    handleSearch(matched);
  };

  return { searched, keyword, handleChange };
};

export default useSearchByInitial;
