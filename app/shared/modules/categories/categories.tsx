'use client';

import 'swiper/css';

import 'swiper/css/pagination';
import CategoryItem from './category';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

export type Category =
  | {
      ko: '전체';
      en: 'all';
    }
  | {
      ko: '예약';
      en: 'reservation';
    }
  | {
      ko: '할일';
      en: 'todo';
    }
  | {
      ko: '작품';
      en: 'craft';
    }
  | {
      ko: '공지';
      en: 'announcement';
    }
  | {
      ko: '운영';
      en: 'enrollment';
    }
  | {
      ko: '승인';
      en: 'approval';
    };

interface CategoriesProps extends ClassNamesProps {
  categories: Category[];
}

const Categories = ({ categories, classNames }: CategoriesProps) => {
  return (
    <Swiper
      modules={[FreeMode]}
      className={classNames}
      slidesPerView={6.5}
      spaceBetween={8}
      freeMode={true}
    >
      {categories.map((category, idx) => (
        <SwiperSlide key={idx}>
          <CategoryItem category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;