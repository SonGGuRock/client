'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationsDailyItem } from './reservations-daily-item';
import { TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';
import { ReservationDay } from './reservation-weekly-view';

const ReservationsMonthlyCalendar = () => {
  const { data: reservationsDays } = useQueryWithCredentials<ReservationDay[]>(
    'reservations/complexity',
    { type: 'monthly' }
  );

  if (!reservationsDays) {
    return <div>loading </div>;
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const today = now.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const lastDate = new Date(year, month, 0).getDate();
  const lastDayOfLastMonth = new Date(year, month - 1, 0).getDay();

  const formatted = reservationsDays.map((day) => {
    return { ...day, date: parseInt(day.date.split('-')[2]) };
  });
  return (
    <div className='pt-4 pb-4 flex flex-wrap justify-center'>
      {/* <p className='text-base font-bold mb-2'>{`${year}년 ${month}월`}</p> */}
      <div className='grid grid-cols-7 w-full justify-center pt-4 pb-3 gap-4'>
        {dayOfWeek.map((day, idx) => (
          <span key={day + idx} className='text-center text-grey500 text-sm'>
            {day}
          </span>
        ))}
      </div>

      <div className='grid grid-cols-7 w-full justify-center items-center gap-4'>
        {/* 공백을 위한 처리  */}
        {/* {new Array(lastDayOfLastMonth + 1).fill(null).map((val, idx) => (
          <span key={`empty-${idx}`} className='min-h-full'></span>
        ))} */}

        {formatted.map((day, idx) => {
          return (
            <span
              key={idx}
              className='relative w-full inline-flex flex-wrap justify-center items-center text-grey900 text-base min-h-8'
            >
              {day.date === today && <TodayBullet positionTop={-2} />}
              {day.date}
              <TimeCrowds classTimes={day.class_times} />
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default ReservationsMonthlyCalendar;
