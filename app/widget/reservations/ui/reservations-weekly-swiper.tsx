import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReservationsDailyItem } from './reservations-daily-item';
import clsx from 'clsx';
import { Reservation } from '../lib/use-reservation-create';
const date = [
  {
    date: '2024-02-14',
    dayOfWeek: '월',
    day: 14,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-15',
    dayOfWeek: '화',
    day: 15,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-16',
    dayOfWeek: '수',
    day: 16,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-17',
    dayOfWeek: '목',
    day: 17,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-18',
    dayOfWeek: '금',
    day: 18,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-19',
    dayOfWeek: '토',
    day: 19,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    date: '2024-02-20',
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
];

export interface ReservationsWeeklySwiperProps {
  style?: 'background-primary' | 'item-primary';
  selectedItem?: Reservation['reservation_date'];
  onClick?: (reservationProperty: Partial<Reservation>) => void;
}

const ReservationsWeeklySwiper = ({
  selectedItem,
  style = 'background-primary',
  onClick,
}: ReservationsWeeklySwiperProps) => {
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
      {date.map((data, idx) => {
        return (
          <SwiperSlide key={`${idx}-${data.day}`} className='py-2'>
            <ReservationsDailyItem
              style={style}
              isSelected={selectedItem === data.date}
              onClick={onClick}
              {...data}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReservationsWeeklySwiper;
