import Notice from '../ui/notice/notice';
import Header from '../ui/header/header';
import Todos from '../ui/todos/todos';
import Gallery from '../ui/gallery/gallery';
import Students from '../ui/students/students';
import Calendar from '../ui/calendar/Calendar';

export default function Page() {
  return (
    <div className='min-h-screen max-w-sm m-auto '>
      <section className='bg-beige h-[376px] w-full px-4 rounded-es-2xl rounded-ee-2xl'>
        <Header />
        <Notice />
        {/* Suspense fallback={Calandar} */}
        <Calendar />
      </section>
      <section className='px-4'>
        {/* Suspense fallback={TodosSkeleton} */}
        <Todos />
        {/* Suspense fallback={Gallery} */}
        <Gallery />
        {/* Suspense fallback={Students} */}
        <Students />
      </section>
    </div>
  );
}
