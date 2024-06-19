import AnnouncementBanner from '../../widget/announcements/AnnouncementBanner';

import Todos from '../../widget/todos/todos';
import Reservations from '../../widget/reservations/ui/preview/reservation-preview-swiper';
import Divider from '../../shared/atoms/Divider';
import HomeHeader from '../../widget/home/ui/home-header';
import StudentsTodayList from '@/app/widget/students/ui/students-today-list';

const HomePage = () => {
  return (
    <div>
      <section className='bg-grey50 h-[376px] w-full px-4 rounded-es-2xl rounded-ee-2xl'>
        <HomeHeader />
        <AnnouncementBanner />
        {/* Suspense fallback={Calandar} */}
        <Reservations />
      </section>

      <section>
        {/* Suspense fallback={TodosSkeleton} */}
        <Todos />
        <Divider />
        {/* Suspense fallback={Gallery} */}
        {/* Suspense fallback={Students} */}
        <StudentsTodayList />
        <Divider />
        {/* <CraftsPreview /> */}
      </section>
    </div>
  );
};

export default HomePage;
