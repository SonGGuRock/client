'use client';

import { AnnouncmentRepresentitive } from '@/app/lib/definition';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const announcement: AnnouncmentRepresentitive[] = [
  {
    id: 1,
    title: '12/31 ~ 1/1 휴무',
  },
  {
    id: 2,
    title: '3월 도자기 워크숍 신청',
  },
  {
    id: 3,
    title: '신규 등록 진행 중',
  },
];

export default function AnnouncementBanner() {
  return (
    <div
      data-desc='notice'
      className='bg-beige flex w-full gap-2 rounded-lg box-border h-[32px] p-1 '
    >
      <Image
        src='/icon/ic-notice-fill-24px.svg'
        alt='icon of the notice'
        width={24}
        height={24}
        className='bg-beige'
      />
      <Swiper
        className='overflow-hidden w-full'
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        direction={'vertical'}
        modules={[Autoplay]}
      >
        {announcement.map(({ id, title }) => (
          <SwiperSlide key={id} className='w-full text-sm'>
            <Link
              href={`/announcement/${id}`}
              className='w-full flex justify-between'
            >
              <span>{title}</span>
              <Image
                src='/icon/icon_goTo.svg'
                alt='더보기'
                width={18}
                height={18}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
