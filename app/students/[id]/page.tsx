import AllVisitView from '@/app/ui/reservation/AllVisitView';
import ReservationItem from '@/app/ui/reservation/ReservationItem';
import Header from '@/app/ui/shared/modules/header';
import TabLayout from '@/app/ui/shared/modules/tab/TabLayout';
import TabMenu from '@/app/ui/shared/modules/tab/TabMenu';
import StudentInfo from '@/app/ui/students/StudentInfo';
import StudentTab from '@/app/ui/students/StudentTab';

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

        <AllVisitView />
      </div>
    </div>
  );
};

export default Page;
