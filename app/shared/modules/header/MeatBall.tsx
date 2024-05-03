'use client';

import useModal from '@/app/shared/modules/modal/lib/useModal';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
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

      <PortalModal />
    </div>
  );
};

export default MeatBall;
