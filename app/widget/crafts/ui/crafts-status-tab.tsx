'use client';

import 'swiper/css';
import { useState } from 'react';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { clsx } from 'clsx';
import { FreeMode } from 'swiper/modules';
import { WORK_STEP } from '@/app/shared/atoms/work-step-label';

type CratsStatus = '진행중' | '완성' | '보관';

const CraftsStatusTab = ({ classNames }: ClassNamesProps) => {
  const [activeStatus, setActiveStatus] = useState<CratsStatus>('진행중');

  const handleStauts = (status: CratsStatus) => {
    setActiveStatus(status);
  };

  const classes = clsx(
    // {
    //   'bg-brown': activeCategory === category.ko,
    //   'text-white': activeCategory === category.ko,
    // },
    {
      'bg-white': true,
      'text-grey400': true,
    },
    'rounded-lg',
    'py-1',
    'px-3',
    'text-xs',
    'whitespace-nowrap',
    'w-fit',
    'text-center',
    'border',
    'border-grey150'
  );
  return (
    <div className={`${classNames}`}>
      <div className='flex justify-between w-full h-9 rounded-lg bg-grey100 text-grey300 text-sm'>
        <span
          onClick={() => {
            handleStauts('진행중');
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === '진행중' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          진행중
        </span>

        <span
          onClick={() => {
            handleStauts('완성');
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === '완성' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          완성
        </span>
        <span
          onClick={() => {
            handleStauts('보관');
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === '보관' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          보관
        </span>
      </div>
      {activeStatus === '진행중' && (
        <Swiper
          className='mt-4'
          modules={[FreeMode]}
          slidesPerView={6.5}
          spaceBetween={8}
          freeMode={true}
        >
          {WORK_STEP.map((step, idx) => (
            <SwiperSlide>
              <li key={`${step.en}-${idx}`} className={classes}>
                {step.ko}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CraftsStatusTab;
