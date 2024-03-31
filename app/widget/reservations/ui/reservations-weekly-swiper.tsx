import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ReservationsDailyItem,
  WeeklyVisitProps,
} from './reservations-daily-item';

const date: WeeklyVisitProps[] = [
  {
    dayOfWeek: '월',
    day: 14,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '화',
    day: 15,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '수',
    day: 16,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '목',
    day: 17,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '금',
    day: 18,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '토',
    day: 19,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
  {
    dayOfWeek: '일',
    day: 20,
    visit: [6, 3, 2, 4],
  },
];

const ReservationsWeeklySwiper = () => {
  return (
    <Swiper
      className='h-full bg-beige min-h-28'
      slidesPerView={6.5}
      spaceBetween={4}
      freeMode={true}
      initialSlide={8}
      modules={[FreeMode]}
    >
      {date.map((data, idx) => {
        return (
          <SwiperSlide key={`${idx}-${data.day}`} className='py-2'>
            <ReservationsDailyItem {...data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReservationsWeeklySwiper;
