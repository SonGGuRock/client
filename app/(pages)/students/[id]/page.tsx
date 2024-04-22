import AllVisitButton from '@/app/widget/reservations/ui/all-visit-button';
import ReservationItem from '@/app/widget/reservations/ui/reservations-item';
import Header from '@/app/shared/modules/header';
import TabLayout from '@/app/shared/modules/tab/TabLayout';
import TabMenu from '@/app/shared/modules/tab/TabMenu';
import StudentInfo from '@/app/widget/students/ui/student-info';
import StudentTab from '@/app/widget/students/ui/student-tab';

const Page = () => {
  return (
    <div className='py-3'>
      <div className='px-4'>
        <Header>
          <Header.Back />
          <Header.MeatBall />
        </Header>
      </div>

      <StudentInfo />
      <StudentTab />

      <div className='flex flex-wrap p-4 gap-2'>
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled />

        <AllVisitButton />
      </div>
    </div>
  );
};

export default Page;
