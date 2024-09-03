import DailySchedule from '@/app/widget/reservations/ui/preview/reservation-daily-schedule';
import BottomBar from '@/app/shared/modules/BottomBar';
import ReservationsDailyList from '@/app/widget/reservations/ui/reservations-daily-list';
import ReservationsMonthlyCalendar from '@/app/widget/reservations/ui/reservations-monthly-calendar';
import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationListItem } from '@/app/widget/reservations/types';

export const ReservationsMonthlyPage = () => {
  const { data: times } =
    useQueryWithCredentials<ReservationListItem[]>('reservations/days');

  if (!times) return <div>loading now </div>;
  return (
    <div>
      <ReservationsHeader />
      <div className='mt-4 px-4'>
        <ReservationsMonthlyCalendar />
      </div>
      <div className='py-6 px-4 bg-white'>
        <DailySchedule classTimes={times} />
      </div>
      {times.map((time) => (
        <ReservationsDailyList
          key={time.id}
          classTimeWithReservations={time.reservations}
        />
      ))}
      <BottomBar />
    </div>
  );
};
