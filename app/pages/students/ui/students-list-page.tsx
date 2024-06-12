'use client';

import Link from 'next/link';
import Image from 'next/image';
import StudentsWithSearch from '@/app/widget/students/ui/students-with-search';
import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import StudentsTab from '@/app/widget/students/ui/students-tab';
import BottomBar from '@/app/shared/modules/BottomBar';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { Student } from '@/app/lib-temp/definition';
import { useState } from 'react';

export type StudentSearchParams = {
  active?: 0 | 1;
  sort?: 'count' | 'name' | 'register_date';
};

const StudentsListPage = () => {
  const [params, setParams] = useState<StudentSearchParams>({
    active: 1,
    sort: 'count',
  });
  const students = useQueryWithCredentials<Student[]>('students', params);

  const handleParams = (newParams: Partial<StudentSearchParams>) => {
    setParams((prev) => {
      return { ...prev, ...newParams };
    });
  };

  return (
    <div className='py-3'>
      <div className=' px-4 flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Title>수강생</Title>
        </div>
        <Link href='/students/create'>
          <Button
            size='small'
            icon={
              <Image
                src='/icon/ic_plus_white.svg'
                alt='추가 버튼'
                width={18}
                height={18}
              />
            }
          >
            새 등록
          </Button>
        </Link>
      </div>

      <StudentsTab onSwitch={handleParams} />
      {students && (
        <StudentsWithSearch students={students} onSort={handleParams} />
      )}
      <BottomBar />
    </div>
  );
};

export default StudentsListPage;
