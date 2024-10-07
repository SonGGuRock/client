// 'use client';

// import { ChangeEvent, useState } from 'react';
// import { makeRegexByCho } from './search-by-initial-consonant';
// import { Student } from '@/app/lib-temp/definition';

// const useSearchByInitial = (students: Student[]) => {
//   const [searched, setSearched] = useState(students);
//   const [keyword, setKeyword] = useState('');

//   const handleSearch = (newStudents: Student[]) => {
//     setSearched(newStudents);
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setKeyword(e.target.value);
//     const search = e.target.value.trim();
//     const matched: Student[] = [];

//     students?.forEach((student) => {
//       const regex = makeRegexByCho(search);
//       const isMatched = regex.test(student.name);
//       if (isMatched) {
//         matched.push(student);
//       }
//     });

//     handleSearch(matched);
//   };

//   return { searched, keyword, handleChange };
// };

// export default useSearchByInitial;

'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { makeRegexByCho } from './search-by-initial-consonant';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { Student } from '@/app/entities/students/types';

export type StudentSearchParams = {
  active?: 0 | 1;
  sort?: 'count' | 'name' | 'register_date';
};

const useSearchStudentsByInitial = () => {
  const [params, setParams] = useState<StudentSearchParams>({
    active: 1,
    sort: 'count',
  });
  const { data: students, isLoading } = useQueryWithCredentials<Student[]>(
    'students',
    params
  );
  const [searchedStudents, setSearcehdStudents] = useState<Student[]>();
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (students) {
      setSearcehdStudents(students);
    }
  }, [students, isLoading]);

  const handleParams = (newParams: Partial<StudentSearchParams>) => {
    setParams((prev) => {
      return { ...prev, ...newParams };
    });
  };

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value.trim());
    matchChoStudents(e.target.value.trim());
  };

  const matchChoStudents = (keyword: string) => {
    const matched: Student[] = [];

    students?.forEach((student) => {
      const regex = makeRegexByCho(keyword);
      const isMatched = regex.test(student.name);
      if (isMatched) {
        matched.push(student);
      }
    });
    setSearcehdStudents(matched);
  };

  return {
    searchedStudents,
    searchKeyword,
    handleKeywordChange,
    handleParams,
    tabActiveStatus: params.active,
  };
};

export default useSearchStudentsByInitial;
