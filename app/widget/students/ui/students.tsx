'use client';

import Title from '../../../shared/atoms/Title';
import GoTo from '../../../shared/atoms/GoTo';
import Student from './student-list-item/Student';
import ExpandedList from '../../../shared/modules/ExpandedList';
import sliceItems from '@/app/shared/lib/sliceItems';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { Student as StudentType } from '@/app/lib-temp/definition';

export default function Students() {
  const students = useQueryWithCredentials<StudentType[]>(
    'reservations/students/today'
  );

  const { limited, rest } = sliceItems<StudentType>(4, students);

  return (
    <div className='mt-8 mb-2 w-full relative px-4'>
      <Title subTitle='오늘 방문하는'>수강생들이에요!</Title>
      <GoTo title='수강생 전체보기' href='' />
      <ul className='w-full flex flex-wrap gap-2 mt-4'>
        {limited.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
      <ExpandedList>
        {rest.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </ExpandedList>
    </div>
  );
}
