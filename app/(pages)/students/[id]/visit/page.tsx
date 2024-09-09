'use client';
import Header from '@/app/shared/modules/header';
import { useParams, useSearchParams } from 'next/navigation';
import StudentAllVisitCalendar from '@/app/widget/reservations/ui/student-all-visit-calendar';

const Page = () => {
  const params = useParams();
  const studentId = params.id as string;
  const pathName = useSearchParams();
  const studentName = pathName.get('name');

  return (
    <div className='px-4'>
      <Header>
        <div className='flex items-center gap-2'>
          <Header.Back />
          <Header.Title>{studentName}</Header.Title>
        </div>
      </Header>

      <StudentAllVisitCalendar studentId={Number(studentId)} />
    </div>
  );
};

export default Page;
