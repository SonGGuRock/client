'use client';
import ReservationsStudentCalendar from '@/app/widget/reservations/ui/reservations-student-calendar';
import Header from '@/app/shared/modules/header';
import { useParams, useSearchParams } from 'next/navigation';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import {
  StudentYearlyRecord,
  StuentVisitWithDate,
} from '@/app/entities/students/types';
import { getLastMonthWithYear } from '@/app/shared/lib/getToday';

const Page = () => {
  const params = useParams();
  const studentId = params.id as string;
  const pathName = useSearchParams();
  const studentName = pathName.get('name');
  const START_MONTH_FROM = getLastMonthWithYear();
  const VISIT_CALENDAR_LIMIT = 2;
  const { data: visitCalendars } = useQueryWithCredentials<StudentYearlyRecord>(
    `/students/${studentId}/visit`,
    {
      start_date: START_MONTH_FROM,
      count: VISIT_CALENDAR_LIMIT,
    }
  );

  if (!visitCalendars) return <div>출석현황을 불러오고 있어요!</div>;
  const firstMonth = Object.values(visitCalendars)[0];
  const firstReservations = [];
  for (const [date, value] of Object.entries(firstMonth)) {
    firstReservations.push({ ...value, date });
  }

  const secondtMonth = Object.values(visitCalendars)[1];
  const secondReservations = [];
  for (const [date, value] of Object.entries(secondtMonth)) {
    secondReservations.push({ ...value, date });
  }
  return (
    <div className='px-4'>
      <Header>
        <div className='flex items-center gap-2'>
          <Header.Back />
          <Header.Title>{studentName}</Header.Title>
        </div>
      </Header>

      <div className='grid gap-4'>
        <ReservationsStudentCalendar
          visits={firstReservations as unknown as StuentVisitWithDate[]}
          yearAndMonth={Object.keys(visitCalendars)[0]}
        />
        <ReservationsStudentCalendar
          visits={secondReservations as unknown as StuentVisitWithDate[]}
          yearAndMonth={Object.keys(visitCalendars)[1]}
        />
      </div>
    </div>
  );
};

export default Page;
