import Image from 'next/image';
import DailySchedule from './reservation-daily-schedule';
import Link from 'next/link';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationDailySummary } from '../../types';
import { Student } from '@/app/entities/students/types';
import { getTodayWithoutYear } from '@/app/shared/lib/getToday';

const Daily = () => {
  const { data: reservations } =
    useQueryWithCredentials<ReservationDailySummary>(
      'reservations/summary/today'
    );

  const { data: students } = useQueryWithCredentials<Student[]>(
    'reservations/students/today'
  );
  if (!reservations || !students) return <div>loading now</div>;
  return (
    <Link href='/reservations'>
      <h2 className=' inline-block px-[12px] py-[6px] text-sm font-bold bg-brown text-white rounded-3xl'>
        {getTodayWithoutYear()}
      </h2>
      <div className='flex flex-wrap gap-4'>
        <p className='text-lg font-bold pt-4'>
          수강생{' '}
          <strong className='text-brown font-semibold'>
            {students.length}명
          </strong>
          이 <br />
          방문할 예정이에요
        </p>
        <Image
          src='/img/bg-img-pot.png'
          alt='도자기 배경'
          width={80}
          height={110}
          className='absolute top-[0px] right-6 z-50'
        />
        <DailySchedule classTimes={reservations.class_times} />
      </div>
    </Link>
  );
};

export default Daily;
