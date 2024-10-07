'use client';

import Title from '../../../shared/atoms/Title';
import GoTo from '../../../shared/atoms/GoTo';
import Student from './student-list-item/Student';
import ExpandedList from '../../../shared/modules/ExpandedList';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import type { Student as StudentType } from '@/app/entities/students/types';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';
import sliceList from '@/app/shared/lib/sliceList';

export default function StudentsTodayList() {
  const { data: students } = useQueryWithCredentials<StudentType[]>(
    'reservations/students/today'
  );

  if (!students) return <></>;

  const { limited, rest } = sliceList(4, students);
  return (
    <div className='mt-8 mb-2 w-full relative px-4'>
      <Title subTitle='오늘 방문하는'>수강생들이에요!</Title>
      <GoTo title='수강생 전체보기' href='' />
      <ul className='w-full flex flex-wrap gap-2 mt-4'>
        {students.length !== 0 ? (
          <>
            {limited?.map((student) => (
              <Student key={student.id} student={student} />
            ))}
          </>
        ) : (
          <EmptyDataNotice> 방문 예정인 수강생이 없습니다</EmptyDataNotice>
        )}
      </ul>
      {students.length > 4 && (
        <ExpandedList>
          {rest?.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </ExpandedList>
      )}
    </div>
  );
}
