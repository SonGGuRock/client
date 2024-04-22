'use client';

import useModal from '@/app/widget/modal/lib/useModal';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

const MeatBall = ({ children }: PropsWithChildren) => {
  const { openModal } = useModal();

  const handleOpenModalMeatball = () => {
    openModal(children);
  };
  return (
    <div>
      <button onClick={handleOpenModalMeatball}>
        <Image
          src='/icon/ic-meatballs-24px.svg'
          alt='더보기 버튼'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default MeatBall;
