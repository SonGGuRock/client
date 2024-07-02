'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnnouncmentRepresentitive } from './lib/type';
import IconNoticeFill from '@/app/shared/atoms/icons/icon-notice-fill';
import { useEffect } from 'react';

export default function AnnouncementBanner() {
  const { data: announcements } = useQueryWithCredentials<
    AnnouncmentRepresentitive[]
  >('announcements/representative');

  return (
    <div
      data-desc='notice'
      className='bg-beige flex w-full gap-2 rounded-lg box-border h-[32px] p-1 '
    >
      <IconNoticeFill />
      <Swiper
        className='overflow-hidden w-full'
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        direction={'vertical'}
        modules={[Autoplay]}
      >
        {announcements && announcements.length !== 0 ? (
          announcements.map(({ id, title }) => (
            <SwiperSlide key={id} className='w-full text-sm'>
              <Link
                href={`/announcements/${id}`}
                className='w-full flex justify-between items-center'
              >
                <p className='w-full truncate'>{title}</p>
                <Image
                  src='/icon/ic-arrow-right-20px.svg'
                  alt='더보기'
                  width={18}
                  height={18}
                />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className='w-full text-sm'>
            <Link
              href={`/announcements`}
              className='w-full flex justify-between items-center'
            >
              <p className='w-full truncate'>공지 쓰러 가기</p>
              <Image
                src='/icon/ic-arrow-right-20px.svg'
                alt='더보기'
                width={18}
                height={18}
              />
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
