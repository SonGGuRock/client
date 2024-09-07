'use client';

import PhoneNumber from '@/app/shared/modules/phone-number';
import Image from 'next/image';
import { Workshop } from '../../workshops/api/type';

interface WorkShopInfoProps {
  workshop: Workshop;
  onClick?: () => void;
}

const WorkShopInfo = ({
  workshop: { name, address, phone_number, profile_picture },
  onClick,
}: WorkShopInfoProps) => {
  const isDefaultImage =
    profile_picture === 'https://default-workshop-thumbnail';
  return (
    <div className='relative my-6' onClick={onClick}>
      <Image
        src={isDefaultImage ? '/img/workshop_default.png' : profile_picture}
        alt='공방 기본 이미지'
        width={343}
        height={136}
        className='w-full object-cover h-[136px] rounded-lg'
      />
      <div className='absolute bottom-3 left-3 grid grid-rows-3'>
        <span className='font-bold text-white'>{name}</span>
        <span className=' text-white text-xs'>{address}</span>
        <PhoneNumber className='text-white' phoneNumber={phone_number} />
      </div>
    </div>
  );
};

export default WorkShopInfo;
