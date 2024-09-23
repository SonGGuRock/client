'use client';

import GoTo from '../../../shared/atoms/GoTo';
import Thumbnail from '../../../shared/atoms/Thumbnail';
import CraftThumbnail, { CraftThumbnailProps } from './craft-thumbnail';

export type UserCraftsProps = {
  userId: number;
  userName: string;
  crafts: CraftThumbnailProps[];
};

const UserCrafts = ({ userId, userName, crafts }: UserCraftsProps) => {
  return (
    <div className='mt-4'>
      <div className='relative'>
        <span className='flex gap-2 mb-4'>
          <Thumbnail id={userId} name={userName} imageUrl='' type='student' />{' '}
          {userName}
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
            <CraftThumbnail key={craft.craft.id} {...craft} />
            // </SwiperSlide>
          ))}
        </ul>
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default UserCrafts;
