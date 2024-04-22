import AnnouncementBanner from '../../widget/announcement/AnnouncementBanner';

import Todos from '../../widget/todos/todos';
import Gallery from '../../widget/crafts/ui/crafts-preview';
import Calendar from '../../widget/calendar/Calendar';
import Divider from '../../shared/atoms/Divider';
import HomeHeader from '../../widget/home/ui/home-header';
import Students from '@/app/widget/students/ui/students';

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
