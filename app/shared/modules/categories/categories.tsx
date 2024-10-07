'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import CategoryItem from './category';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import {
  NotificationCategoryKey,
  NotificationCategoryMap,
} from '@/app/entities/notifications/types';

interface CategoriesProps extends ClassNamesProps {
  categories: NotificationCategoryMap;
  activeCategory: NotificationCategoryKey;
} 

const Categories = ({
  categories,
  activeCategory,
  classNames,
}: CategoriesProps) => {
  return (
    <Swiper
      modules={[FreeMode]}
      className={classNames}
      slidesPerView={6.5}
      spaceBetween={8}
      freeMode={true}
    >
      {Object.keys(categories).map((category, idx) => (
        <SwiperSlide key={idx}>
          <CategoryItem
            category={category as NotificationCategoryKey}
            isActive={category === activeCategory}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
