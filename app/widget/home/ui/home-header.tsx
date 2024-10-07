'use client';

import { NotificationNew } from '@/app/entities/notifications/types';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeader() {
  const { data: isNew } =
    useQueryWithCredentials<NotificationNew>('/notifications/new');
  return (
    <header className='h-[60px] flex items-center justify-between'>
      <h1 className='font-bold text-xl text-sand'></h1>
      <Link href='/notifications' className='relative'>
        <Image
          src='/icon/icon_bell.png'
          alt='icon of the bell'
          width={24}
          height={24}
        />
        {isNew?.new && (
          <span className='absolute right-0 top-0 block w-3 h-3 border-2 border-[#FBFAF8] bg-error rounded-full'></span>
        )}
      </Link>
    </header>
  );
}
