'use client';

import type { TodayStudentCrafts as TodayStudentCraftList } from '@/app/entities/crafts/types';
import GoTo from '../../../shared/atoms/GoTo';
import Thumbnail from '../../../shared/atoms/Thumbnail';
import CraftThumbnail from './craft-thumbnail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const TodayStudentCraftList = ({
  id,
  name,
  profile_picture,
  crafts,
}: TodayStudentCraftList) => {
  return (
    <div className='mt-4'>
      <div className='relative'>
        <span className='flex gap-2 mb-4'>
          <Thumbnail
            id={id}
            name={name}
            imageUrl={profile_picture}
            type='student'
          />
          {name}
          <GoTo href={`/students/${id}`} title='더보기' />
        </span>
        <Swiper
          slidesPerView={3.2}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode]}
        >
          <ul className='flex justify-between gap-2'>
            {crafts.map((craft) => (
              <SwiperSlide key={craft.id}>
                <CraftThumbnail key={craft.id} craft={craft} showWorkStatus />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default TodayStudentCraftList;
