'use client';

import Image from 'next/image';
import { Workshop } from '../../workshops/api/type';
import ProfileDefault from '@/app/shared/modules/ProfileDefault';

interface WorkShopInfoProps {
  workshop: Workshop;
  onClick?: () => void;
}

const MyWorkShopInfo = ({
  workshop: { name, address, profile_picture },
  onClick,
}: WorkShopInfoProps) => {
  return (
    <div className='relative mt-6' onClick={onClick}>
      {profile_picture ? (
        <Image
          src={profile_picture}
          alt='공방 기본 이미지'
          width={343}
          height={136}
          className='max-h-[136px]'
        />
      ) : (
        <Image
          src={'/img/workshop_default.png'}
          alt='공방 기본 이미지'
          width={343}
          height={136}
        />
      )}
      <div className='absolute bottom-3 left-3 grid grid-rows-2'>
        <span className='font-bold text-white'>{name}</span>
        <span className=' text-white'>{address}</span>
      </div>
    </div>
  );
};

export default MyWorkShopInfo;
