import clsx from 'clsx';
import { ReservationClassTime, TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';
import formatDateString from '@/app/shared/lib/formatDateString';
import { ClassNamesProps } from './class-time-picker';

export type DailyItemDate = {
  date: string;
  day_name: '월' | '화' | '수' | '목' | '금' | '토' | '일';
};

export interface WeeklyVisitProps extends ClassNamesProps {
  dateItem: DailyItemDate;
  isSelected: boolean;
  style?: 'background-primary' | 'item-primary';
  selectedItem?: string;
  onClick?: (date: string) => void;
  classTimes?: ReservationClassTime[];
}
export const ReservationsDailyItem = ({
  dateItem,
  isSelected,
  style = 'background-primary',
  onClick,
  classTimes,
  classNames,
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
      className={`relative p-3  w-14 h-18 flex flex-wrap gap-[2px] justify-center itmes-center rounded-lg ${classNames} ${itemClasses}`}
    >
      {getDay(dateItem.date) === getToday() && <TodayBullet />}
      <p className='w-full text-center text-sm text-grey500'>
        {dateItem.day_name}
      </p>
      <p className='w-full text-center text-base text-grey900'>
        {getDay(dateItem.date)}
      </p>
      {classTimes && <TimeCrowds classTimes={classTimes} />}
    </div>
  );
};
