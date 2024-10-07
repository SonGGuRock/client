'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/signin');
    }, 3000);
  }, []);
  return (
    <main className='flex min-h-screen max-w-sm flex-col items-center justify-center bg-brown'>
      <Image src='/img/logo.png' alt='손꾸락 로고' width={80} height={80} />
    </main>
  );
}
