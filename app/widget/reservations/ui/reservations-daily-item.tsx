import { TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';

export interface WeeklyVisitProps {
  dayOfWeek: string;
  day: number;
  visit: number[];
}
export const ReservationsDailyItem = ({
  dayOfWeek,
  day,
  visit,
}: WeeklyVisitProps) => {
  return (
    <div className='relative p-3 w-14 h-18 flex flex-wrap gap-1 justify-center itmes-center'>
      {day === 17 && <TodayBullet />}
      <p className='w-full text-center text-sm text-grey500'>{dayOfWeek}</p>
      <p className='w-full text-center text-base text-grey900'>{day}</p>
      <TimeCrowds />
    </div>
  );
};
