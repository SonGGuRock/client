'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type BackProps = {
  text?: string;
};
const Back = ({ text }: BackProps) => {
  const router = useRouter();
  return (
    <div
      className='w-fit h-12 flex items-center justify-center'
      onClick={() => router.back()}
    >
      {text ? (
        <span className='w-fit text-base'>{text}</span>
      ) : (
        <Image
          src='/icon/ic-arrow_left-24px.svg'
          alt='뒤로 가기'
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default Back;
