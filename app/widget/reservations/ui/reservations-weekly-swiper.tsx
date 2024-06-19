import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  DayliyItemDate,
  ReservationsDailyItem,
} from './reservations-daily-item';
import clsx from 'clsx';
const datetemp = [
  {
    date: '2024-02-14',
    dayOfWeek: '월',
    day: 14,
    visit: [6, 3, 2, 4],
  },
];

export interface DateWeeklySwiperProps {
  dateArray: DayliyItemDate[];
  style?: 'background-primary' | 'item-primary';
  selectedItem?: string;
  onClick?: (date: string) => void;
  isWithTimeCrowds?: boolean;
}

const DateWeeklySwiper = ({
  dateArray,
  selectedItem,
  style = 'background-primary',
  isWithTimeCrowds = true,
  onClick,
}: DateWeeklySwiperProps) => {
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
      {dateArray.map((data, idx) => {
        return (
          <SwiperSlide key={`${idx}-${data}`} className='py-2'>
            <ReservationsDailyItem
              dateItem={data}
              style={style}
              isSelected={selectedItem === data.date}
              onClick={onClick}
              isWithTimeCrowds={isWithTimeCrowds}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DateWeeklySwiper;
