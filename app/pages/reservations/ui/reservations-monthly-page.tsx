import DailySchedule from '@/app/widget/calendar/DailySchedule';
import BottomBar from '@/app/shared/modules/BottomBar';
import ReservationsDailyList from '@/app/widget/reservations/ui/reservations-daily-list';
import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';
import ReservationsMonthlyCalendar from '@/app/widget/reservations/ui/reservations-monthly-calendar';

export const ReservationsMonthlyPage = () => {
  return (
    <div>
      <div className='py-3 px-4 bg-beige'>
        <ReservationsHeader />

        <div className='mt-4'>
          <ReservationsMonthlyCalendar />
        </div>
      </div>
      <div className='py-6 px-4'>
        <DailySchedule />
      </div>

      <ReservationsDailyList />
      <BottomBar />
    </div>
  );
};
