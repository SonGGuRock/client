import DailySchedule from '@/app/widget/reservations/ui/preview/reservation-daily-schedule';
import BottomBar from '@/app/shared/modules/BottomBar';
import ReservationsDailyList from '@/app/widget/reservations/ui/reservations-daily-list';
import ReservationsMonthlyCalendar from '@/app/widget/reservations/ui/reservations-monthly-calendar';

export const ReservationsMonthlyPage = () => {
  return (
    <div>
      <div className='mt-4 px-4'>
        <ReservationsMonthlyCalendar />
      </div>
      <div className='py-6 px-4 bg-white'>
        <DailySchedule />
      </div>

      <ReservationsDailyList />
      <BottomBar />
    </div>
  );
};
