import Image from 'next/image';
import DailySchedule from './reservation-daily-schedule';
import Link from 'next/link';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationDailySummary } from '../../types';

const Daily = () => {
  const { data } = useQueryWithCredentials<ReservationDailySummary>(
    'reservation/summary/today'
  );
  if (!data) return <div>loading now</div>;
  return (
    <Link href='/reservations'>
      <h2 className=' inline-block px-[12px] py-[6px] text-sm font-bold bg-brown text-white rounded-3xl'>
        1월 16일 화요일
      </h2>
      <div className='flex flex-wrap gap-4'>
        <p className='text-lg font-bold pt-4'>
          수강생 <strong className='text-brown font-semibold'>9명</strong>이{' '}
          <br />
          방문할 예정이에요
        </p>
        <Image
          src='/img/bg-img-pot.png'
          alt='도자기 배경'
          width={80}
          height={110}
          className='absolute top-[0px] right-6 z-50'
        />
        <DailySchedule classTimes={data.class_times} />
      </div>
    </Link>
  );
};

export default Daily;
