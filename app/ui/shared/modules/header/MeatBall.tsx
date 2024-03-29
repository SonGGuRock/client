'use client';

import useModalContext from '@/app/hooks/useModalContext';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

const MeatBall = ({ children }: PropsWithChildren) => {
  const { open, toggle } = useModalContext();
  return (
    <div>
      <button onClick={toggle}>
        <Image
          src='/icon/ic-meatballs-24px.svg'
          alt='더보기 버튼'
          width={24}
          height={24}
        />
      </button>
      {open && children}
    </div>
  );
};

export default MeatBall;
