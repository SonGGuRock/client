import ReservationCalendar from '@/app/ui/reservation/ReservationCalendar';
import Header from '@/app/ui/shared/modules/header';

const Page = () => {
  return (
    <div className='px-4'>
      <Header>
        <div className='flex items-center gap-2'>
          <Header.Back />
          <Header.Title title='최지영' />
        </div>
      </Header>

      <div className='grid gap-4'>
        <ReservationCalendar />
      </div>
    </div>
  );
};

export default Page;
