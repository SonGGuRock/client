import GoTo from '@/app/shared/atoms/GoTo';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';

import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CraftItemWorkstep from '@/app/widget/crafts/ui/craft-item-workstep';
import Image from 'next/image';

const CraftItemDetailOthers = () => {
  return (
    <div className='px-4'>
      <div className='w-full relative mb-4'>
        <span className='text-base text-grey900 font-bold'>
          {'작품명'}을 만들고 있어요!
        </span>
        <GoTo href='' title='전체보기' />
      </div>
      <Swiper
        modules={[FreeMode]}
        slidesPerView={3.8}
        spaceBetween={8}
        freeMode={true}
        className='h-[88px]'
      >
        <SwiperSlide>
          <li className='flex justify-center items-center rounded-lg bg-grey100 h-full'>
            <IconPlusCircle />
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className='w-[88px] h-[88px] relative'>
            <CraftItemWorkstep
              classNames='absolute left-0 top-0'
              workstep='초벌'
              style='black'
            />
            <Image
              className='rounded-lg object-cover w-[88px] h-[88px]'
              src='/mock/refire.png'
              alt='craft mock'
              width={88}
              height={88}
            />
          </li>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CraftItemDetailOthers;