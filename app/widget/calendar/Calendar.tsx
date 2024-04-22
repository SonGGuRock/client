'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Weekly from './Weekly';
import Daily from './Daily';

export default function Calendar() {
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
