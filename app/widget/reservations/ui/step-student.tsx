'use client';

import Title from '@/app/shared/atoms/Title';
import { SubmissionContext } from '@/app/_provider/reservation-create-provider';
import { Context } from 'react';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftItem, Reservation, Student } from '@/app/lib-temp/definition';
import StudentsWithSearch from './step-student-searched';

export interface StepStudentProps {
  context: Context<SubmissionContext<Reservation | CraftItem> | null>;
}

function StepStudent({ context }: StepStudentProps) {
  const { data: students, isLoading } = useQueryWithCredentials<Student[]>(
    'students',
    {
      active: 1,
      sort: 'count',
    }
  );

  return (
    <div >
      <div>
        <Title size='large'>수강생을 선택해주세요</Title>
      </div>

      {isLoading && <div>수강생을 불러오고 있어요!</div>}
      {!isLoading && students && (
        <StudentsWithSearch context={context} students={students} />
      )}
    </div>
  );
}

export default StepStudent;
