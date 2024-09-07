'use client';

import DailySchedule from '@/app/widget/reservations/ui/preview/reservation-daily-schedule';
import BottomBar from '@/app/shared/modules/BottomBar';
import ReservationsDailyList from '@/app/widget/reservations/ui/reservations-daily-list';
import ReservationsMonthlyCalendar from '@/app/widget/reservations/ui/reservations-monthly-calendar';
import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationListItem } from '@/app/widget/reservations/types';
import { getKrThisMonthWithYear } from '@/app/shared/lib/getToday';
import { useParams } from 'next/navigation';

export const ReservationsMonthlyPage = () => {
  const params = useParams();
  const date = params.date as string;
  const { data: times } = useQueryWithCredentials<ReservationListItem[]>(
    'reservations/days',
    { date }
  );

  if (!times) return <div>loading now </div>;
  return (
    <div>
      <ReservationsHeader />
      <div className='mt-4 px-4'>
        <p className='text-center font-bold text-grey900 text-base'>
          {getKrThisMonthWithYear()}
        </p>
        <ReservationsMonthlyCalendar />
      </div>
      <div className='py-6 px-4 bg-white'>
        <DailySchedule classTimes={times} />
      </div>
      {times.map((time) => (
        <ReservationsDailyList key={time.id} classTimeWithReservations={time} />
      ))}
      <BottomBar />
    </div>
  );
};
