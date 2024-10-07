'use client';

import Cookies from 'js-cookie';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Weekly from './reservations-weekly';
import Daily from './reservations-daily';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { WorkshopOperation } from '@/app/widget/workshops/api/type';
import { useEffect } from 'react';

export default function ReservationPreviewSwiper() {
  const { data: operation } = useQueryWithCredentials<WorkshopOperation>(
    'workshops/settings/operation'
  );

  useEffect(() => {
    operation && Cookies.set('throw', JSON.stringify(operation.throw_capacity));
    operation && Cookies.set('hand', JSON.stringify(operation.hand_capacity));
  }, [operation]);

  const pagination = {
    renderBullet: function (index: number, className: string) {
      return (
        '<span style="width:6px; height: 6px;" class="' +
        className +
        '"></span>'
      );
    },
  };
  return (
    <div className='my-8'>
      <div className='relative'>
        {/* <GoTo href='#' title='캘린더 전체보기' /> */}
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className='h-[242px] mt-4'
        >
          <SwiperSlide>
            <Daily />
          </SwiperSlide>
          <SwiperSlide>
            <Weekly />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
