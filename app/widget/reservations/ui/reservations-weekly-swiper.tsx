import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  DailyItemDate,
  ReservationsDailyItem,
} from './reservations-daily-item';
import clsx from 'clsx';
import { ReservationClassTime } from './time-crowds';
const datetemp = [
  {
    date: '2024-02-14',
    dayOfWeek: '월',
    day: 14,
    visit: [6, 3, 2, 4],
  },
];

interface DayReservation extends DailyItemDate {
  class_times: ReservationClassTime[];
}

export interface DateWeeklySwiperProps<T extends DayReservation> {
  days: T[];
  style?: 'background-primary' | 'item-primary';
  selectedItem?: string;
  onClick?: (date: string) => void;
}

function DateWeeklySwiper<T extends DayReservation>({
  days,
  selectedItem,
  style = 'background-primary',
  onClick,
}: DateWeeklySwiperProps<T>) {
  const swiperClasses = clsx({
    'bg-beige': style === 'background-primary',
    'bg-white': style === 'item-primary',
  });

  return (
    <Swiper
      className={`h-full min-h-28 ${swiperClasses}`}
      slidesPerView={5.5}
      spaceBetween={4}
      freeMode={true}
      initialSlide={1}
      modules={[FreeMode]}
    >
      {days.map((day, idx) => {
        return (
          <SwiperSlide key={`${idx}-${day.date}`} className='py-2'>
            <ReservationsDailyItem
              dateItem={day}
              style={style}
              isSelected={selectedItem === day.date}
              onClick={onClick}
              classTimes={day.class_times}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default DateWeeklySwiper;
