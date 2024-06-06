'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnnouncmentRepresentitive } from './lib/type';

export default function AnnouncementBanner() {
  const { data: announcements } = useQueryWithCredentials<
    AnnouncmentRepresentitive[]
  >('announcements/representative');

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
        {announcements?.map(({ id, content }) => (
          <SwiperSlide key={id} className='w-full text-sm'>
            <Link
              href={`/announcements/${id}`}
              className='w-full flex justify-between items-center'
            >
              <p className='w-full truncate'>{content}</p>
              <Image
                src='/icon/ic-arrow-right-20px.svg'
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
