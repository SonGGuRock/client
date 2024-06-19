import clsx from 'clsx';
import { DateWeeklySwiperProps } from './reservations-weekly-swiper';
import { TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';
import formatDateString from '@/app/shared/lib/formatDateString';

export type DayliyItemDate = {
  date: string;
  dayName: '월' | '화' | '수' | '목' | '금' | '토' | '일';
};

export interface WeeklyVisitProps {
  // visit: number[];
  dateItem: DayliyItemDate;
  isSelected: boolean;
  style?: 'background-primary' | 'item-primary';
  selectedItem?: string;
  onClick?: (date: string) => void;
  isWithTimeCrowds?: boolean;
}
export const ReservationsDailyItem = ({
  dateItem,
  // visit,
  onClick,
  isSelected,
  style = 'background-primary',
  isWithTimeCrowds,
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
      onClick(dateItem.date);
    }
  };

  const getDay = (formatDate: string) => {
    return formatDate.split('-')[2];
  };

  const getToday = () => {
    return formatDateString({
      fullDateString: String(new Date()),
      options: {
        includeYear: false,
        includeMonth: false,
        includeHours: false,
        includeMinutes: false,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`relative p-3  w-14 h-18 flex flex-wrap gap-[2px] justify-center itmes-center rounded-lg ${itemClasses}`}
    >
      {getDay(dateItem.date) === getToday() && <TodayBullet />}
      <p className='w-full text-center text-sm text-grey500'>
        {dateItem.dayName}
      </p>
      <p className='w-full text-center text-base text-grey900'>
        {getDay(dateItem.date)}
      </p>
      {isWithTimeCrowds && <TimeCrowds />}
    </div>
  );
};
