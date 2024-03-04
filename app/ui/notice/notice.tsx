'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Notice() {
  const mock = [
    {
      id: 1,
      notice: '12/31 ~ 1/1 휴무',
    },
    {
      id: 2,
      notice: '3월 도자기 워크숍 신청',
    },
    {
      id: 3,
      notice: '신규 등록 진행 중',
    },
  ];

  return (
    <div
      data-desc='notice'
      className='bg-deepOrange flex w-full gap-2 rounded-lg box-border bg-white h-[32px] p-1 '
    >
      <Image
        src='/icon_notice.png'
        alt='icon of the notice'
        width={24}
        height={24}
      />
      <Swiper
        className='overflow-hidden w-full'
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        direction={'vertical'}
        modules={[Autoplay]}
      >
        {mock.map((notice) => (
          <SwiperSlide key={notice.id} className='w-full'>
            <Link href={`/notice/${notice.id}`}>{notice.notice}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
