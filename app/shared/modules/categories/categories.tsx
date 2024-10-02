'use client';

import 'swiper/css';

import 'swiper/css/pagination';
import CategoryItem from './category';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Context } from 'react';
import { CategoryContext } from '@/app/_provider/craft-workstep-provider';
import { WorkStepType } from '../../atoms/work-step-label';
import { NotificationCategories } from '@/app/entities/notifications/types';

interface CategoriesProps extends ClassNamesProps {
  categories: NotificationCategories[];
  context:
    | CategoryContext<NotificationCategories['ko']>
    | CategoryContext<WorkStepType['ko'] | null>;
}

// context: Context<
//   | CategoryContext<NotificationCategories['ko'] | null>
//   | CategoryContext<WorkStepType['ko'] | null>
// >;

const Categories = ({ categories, classNames, context }: CategoriesProps) => {
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
          <CategoryItem category={category.ko} context={context} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
