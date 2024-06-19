import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WeeklyItem, { WeeklyItemProps } from './reservations-weekly-Item';

const date: WeeklyItemProps[] = [
  {
    dayOfWeek: '월',
    day: 14,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '화',
    day: 15,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '수',
    day: 16,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '목',
    day: 17,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '금',
    day: 18,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '토',
    day: 19,
    throwCount: 0,
    handbuildCount: 9,
  },
  {
    dayOfWeek: '일',
    day: 20,
    throwCount: 0,
    handbuildCount: 9,
  },
];

const Weekly = () => {
  return (
    <>
      <h2 className=' inline-block px-[12px] py-[6px] text-sm font-bold bg-brown text-white rounded-3xl'>
        1월 16일 화요일
      </h2>
      <div className='h-full'>
        <p className='text-lg mt-4 ml-2 mb-2 font-bold text-grey900'>
          이번주 스케줄
        </p>
        <Swiper
          className='h-full'
          slidesPerView={5.3}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode]}
        >
          {date.map((data, idx) => {
            return (
              <SwiperSlide key={`${idx}-${data.day}`} className='py-2'>
                <WeeklyItem {...data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Weekly;
