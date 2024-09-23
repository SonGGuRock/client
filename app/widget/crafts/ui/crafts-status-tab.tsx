'use client';

import 'swiper/css';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { clsx } from 'clsx';
import { FreeMode } from 'swiper/modules';
import { WORK_STEP, WorkStepType } from '@/app/shared/atoms/work-step-label';
import { CraftStatus } from '@/app/entities/crafts/types';

interface CraftsStatusTab extends ClassNamesProps {
  activeStatus: CraftStatus;
  acitveWorkstep: WorkStepType['en'] | 'all';
  onClick: (
    params: { status: CraftStatus } | { work_step: WorkStepType['en'] | 'all' }
  ) => void;
}

const CraftsStatusTab = ({
  acitveWorkstep,
  activeStatus,
  onClick,
  classNames,
}: CraftsStatusTab) => {
  const classes = clsx(
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
            onClick({ status: 'ongoing' });
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === 'ongoing' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          진행중
        </span>

        <span
          onClick={() => {
            onClick({ status: 'completed' });
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === 'completed' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          완성
        </span>
        <span
          onClick={() => {
            onClick({ status: 'keep' });
          }}
          className={`w-full text-sm font-bold inline-flex justify-center items-center py-2 ${
            activeStatus === 'keep' &&
            'text-grey900 bg-white rounded-lg border-2 border-grey100'
          }`}
        >
          보관
        </span>
      </div>
      {activeStatus === 'ongoing' && (
        <Swiper
          className='mt-4'
          modules={[FreeMode]}
          slidesPerView={6.5}
          spaceBetween={8}
          freeMode={true}
        >
          <SwiperSlide key='all'>
            <li
              className={`${classes} ${
                acitveWorkstep === 'all'
                  ? 'bg-brown text-white'
                  : 'bg-white text-grey400'
              }`}
              onClick={() => {
                onClick({ work_step: 'all' });
              }}
            >
              전체
            </li>
          </SwiperSlide>
          {WORK_STEP.map((step, idx) => (
            <SwiperSlide key={`${step.en}-${idx}`}>
              <li
                className={`${classes} ${
                  acitveWorkstep === step.en
                    ? 'bg-brown text-white'
                    : 'bg-white text-grey400'
                }`}
                onClick={() => {
                  onClick({ work_step: step.en });
                }}
              >
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
