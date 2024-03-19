import AnnouncementBanner from '../ui/announcement/AnnouncementBanner';

import Todos from '../ui/todos/todos';
import Gallery from '../ui/gallery/gallery';
import Calendar from '../ui/calendar/Calendar';
import Divider from '../ui/components/atoms/Divider';
import Header from '../ui/header/Header';
import Students from '../ui/students/Students';

export default function Page() {
  return (
    <div className='min-h-screen max-w-sm m-auto '>
      <section className='bg-grey50 h-[376px] w-full px-4 rounded-es-2xl rounded-ee-2xl'>
        <Header />
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
