'use client';

import Title from '@/app/shared/atoms/Title';
import { SubmissionContext } from '@/app/_provider/reservation-create-provider';
import { Context } from 'react';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import StudentsWithSearch from './step-student-searched';
import {
  CraftCreateBody,
  CraftItemCreateBody,
} from '@/app/entities/crafts/types';
import { Student } from '@/app/entities/students/types';
import { ReservationCreateBody } from '@/app/entities/reservations/types';

export interface StepStudentProps<
  T extends ReservationCreateBody | CraftCreateBody
> {
  context: Context<SubmissionContext<T> | null>;
}

function StepStudent<T extends ReservationCreateBody | CraftCreateBody>({
  context,
}: StepStudentProps<T>) {
  const { data: students, isLoading } = useQueryWithCredentials<Student[]>(
    'students',
    {
      active: 1,
      sort: 'count',
    }
  );

  return (
    <div>
      <div>
        <Title size='large'>수강생을 선택해주세요</Title>
      </div>

      {isLoading && <div>수강생을 불러오고 있어요!</div>}
      {!isLoading && students && <StudentsWithSearch context={context} />}
    </div>
  );
}

export default StepStudent;
