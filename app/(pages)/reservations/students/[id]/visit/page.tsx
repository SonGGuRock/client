import ReservationsStudentCalendar from '@/app/widget/reservations/ui/reservations-student-calendar';
import Header from '@/app/shared/modules/header';

const Page = () => {
  return (
    <div className='px-4'>
      <Header>
        <div className='flex items-center gap-2'>
          <Header.Back />
          <Header.Title>최지영</Header.Title>
        </div>
      </Header>

      <div className='grid gap-4'>
        <ReservationsStudentCalendar />
      </div>
    </div>
  );
};

export default Page;
