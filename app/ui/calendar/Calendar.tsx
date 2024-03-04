'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import GoTo from '../components/atoms/GoTo';
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
    <div className='my-6'>
      <div className='relative'>
        <h2 className='w-full text-base font-semibold'>1월 16일 화요일</h2>
        <GoTo href='#' title='캘린더 전체보기' />
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className='h-[204px] mt-4'
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
