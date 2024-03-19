'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Craft, { CraftProps } from './Craft';
import GoTo from '../components/atoms/GoTo';
import Thumbnail from '../components/atoms/Thumbnail';
import { FreeMode } from 'swiper/modules';

export type UserCraftsProps = {
  userId: number;
  userName: string;
  crafts: CraftProps[];
};

const UserCrafts = ({ userId, userName, crafts }: UserCraftsProps) => {
  return (
    <div className='mt-4'>
      <div className='relative'>
        <span className='flex gap-2 mb-4'>
          <Thumbnail userId={userId} userName={userName} /> {userName}
          <GoTo href='' title='더보기' />
        </span>
        {/* <Swiper
          slidesPerView={3.2}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode]}
        > */}
        <ul className='flex justify-between gap-2'>
          {crafts.map((craft) => (
            // <SwiperSlide key={craft.craftId}>
            <Craft {...craft} />
            // </SwiperSlide>
          ))}
        </ul>
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default UserCrafts;
