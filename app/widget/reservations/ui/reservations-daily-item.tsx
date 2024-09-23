import clsx from 'clsx';
import { TimeCrowds } from './time-crowds';
import { TodayBullet } from './today-bullet';
import { ClassNamesProps } from './class-time-picker';
import { getToday } from '@/app/shared/lib/getToday';
import { ReservationClassTime } from '@/app/entities/reservations/types';

export type DailyItemDate = {
  date: string;
  day_name: '월' | '화' | '수' | '목' | '금' | '토' | '일';
};

export interface WeeklyVisitProps extends ClassNamesProps {
  dateItem: DailyItemDate;
  isSelected: boolean;
  style?: 'background-primary' | 'item-primary' | 'item-brown-primary';
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
      'bg-brown': isSelected === true && style === 'item-brown-primary',
    },
    {
      'border-0': isSelected === false,
      'border-grey200': isSelected === true,
    }
  );

  const isSelectedAndBrownStyle =
    isSelected === true && style === 'item-brown-primary';
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

  console.log(getDay(dateItem.date), getToday());
  return (
    <div
      onClick={handleClick}
      className={`relative p-3  w-14 h-18 flex flex-wrap gap-[2px] justify-center itmes-center rounded-lg ${classNames} ${itemClasses}`}
    >
      {getDay(dateItem.date) === getToday() && <TodayBullet />}
      <p
        className={`w-full text-center text-sm ${
          isSelectedAndBrownStyle ? 'text-white' : 'text-grey500'
        } `}
      >
        {dateItem.day_name}
      </p>
      <p
        className={`w-full text-center text-base ${
          isSelectedAndBrownStyle ? 'text-white' : 'text-grey900'
        }`}
      >
        {getDay(dateItem.date)}
      </p>
      {classTimes && <TimeCrowds classTimes={classTimes} />}
    </div>
  );
};
