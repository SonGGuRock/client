import AnnouncementBanner from '../../ui/announcement/AnnouncementBanner';

import Todos from '../../ui/todos/todos';
import Gallery from '../../ui/gallery/gallery';
import Calendar from '../../ui/calendar/Calendar';
import Divider from '../../shared/ui/atoms/Divider';
import HomeHeader from '../../ui/home/HomeHeader';
import Students from '@/app/ui/students/students';

export default function Page() {
  return (
    <div>
      <section className='bg-grey50 h-[376px] w-full px-4 rounded-es-2xl rounded-ee-2xl'>
        <HomeHeader />
        <AnnouncementBanner />
        {/* Suspense fallback={Calandar} */}
        <Calendar />
      </section>

      <section>
        {/* Suspense fallback={TodosSkeleton} */}
        <Todos />
        <Divider />
        {/* Suspense fallback={Gallery} */}
        {/* Suspense fallback={Students} */}
        <Students />
        <Divider />
        <Gallery />
      </section>
    </div>
  );
}
