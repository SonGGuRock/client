'use client';

import Image from 'next/image';
import { Workshop } from '../../workshops/api/type';

interface WorkShopInfoProps {
  workshop: Omit<Workshop, 'profile_picture'>;
  onClick?: () => void;
}

const MyWorkShopInfo = ({
  workshop: { name, address },
  onClick,
}: WorkShopInfoProps) => {
  return (
    <div className='relative mt-6' onClick={onClick}>
      <Image
        src={'/img/workshop_default.png'}
        alt='공방 기본 이미지'
        width={343}
        height={136}
      />
      <div className='absolute bottom-3 left-3 grid grid-rows-2'>
        <span className='font-bold text-white'>{name}</span>
        <span className=' text-white'>{address}</span>
      </div>
    </div>
  );
};

export default MyWorkShopInfo;
