import {
  StudentYearlyRecord,
  StuentVisitWithDate,
} from '@/app/entities/students/types';
import ReservationsStudentCalendar from './reservations-student-calendar';
import { getLastMonthWithYear } from '@/app/shared/lib/getToday';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';

interface StudentVisitsCalendaProps {
  studentId: number;
  onClickDate: (reservationId: number, reservationDate: string) => void;
}

const StudentAllVisitCalendar = ({
  studentId,
  onClickDate,
}: StudentVisitsCalendaProps) => {
  const START_MONTH_FROM: string = getLastMonthWithYear();
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
    <div className='w-full grid gap-4'>
      <ReservationsStudentCalendar
        onClickDate={onClickDate}
        visits={firstReservations as unknown as StuentVisitWithDate[]}
        yearAndMonth={Object.keys(visitCalendars)[0]}
      />
      <ReservationsStudentCalendar
        onClickDate={onClickDate}
        visits={secondReservations as unknown as StuentVisitWithDate[]}
        yearAndMonth={Object.keys(visitCalendars)[1]}
      />
    </div>
  );
};

export default StudentAllVisitCalendar;
