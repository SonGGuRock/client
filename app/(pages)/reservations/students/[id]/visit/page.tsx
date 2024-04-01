import ReservationsStudentCalendar from '@/app/widget/reservations/ui/reservations-student-calendar';
import Header from '@/app/shared/ui/modules/header';

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
        <ReservationsStudentCalendar />
      </div>
    </div>
  );
};

export default Page;
