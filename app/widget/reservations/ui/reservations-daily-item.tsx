import clsx from 'clsx';
import { ReservationsWeeklySwiperProps } from './reservations-weekly-swiper';
import { TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';

export interface WeeklyVisitProps extends ReservationsWeeklySwiperProps {
  date: string;
  dayOfWeek: string;
  day: number;
  visit: number[];
  isSelected: boolean;
}
export const ReservationsDailyItem = ({
  date,
  dayOfWeek,
  day,
  visit,
  onClick,
  isSelected,
  style = 'background-primary',
}: WeeklyVisitProps) => {
  const itemClasses = clsx(
    {
      'bg-inherit': isSelected === false && style === 'background-primary',
      'bg-grey50': isSelected === false && style === 'item-primary',
      'bg-grey100': isSelected === true && style === 'item-primary',
    },
    {
      'border-0': isSelected === false,
      'border-grey200': isSelected === true,
    }
  );

  const handleClick = () => {
    if (!onClick) {
      return;
    } else {
      onClick({ reservation_date: date });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative p-3  w-14 h-18 flex flex-wrap gap-[2px] justify-center itmes-center rounded-lg ${itemClasses}`}
    >
      {day === 17 && <TodayBullet />}
      <p className='w-full text-center text-sm text-grey500'>{dayOfWeek}</p>
      <p className='w-full text-center text-base text-grey900'>{day}</p>
      <TimeCrowds />
    </div>
  );
};
