'use client';

import PhoneNumber from '@/app/shared/modules/phone-number';
import Image from 'next/image';
import { Workshop } from '../../workshops/api/type';

interface WorkShopInfoProps {
  workshop: Workshop;
  onClick?: () => void;
}

const WorkShopInfo = ({
  workshop: { name, address, phone_number },
  onClick,
}: WorkShopInfoProps) => {
  return (
    <div className='relative my-6' onClick={onClick}>
      <Image
        src={'/img/workshop_default.png'}
        alt='공방 기본 이미지'
        width={343}
        height={136}
      />
      <div className='absolute bottom-3 left-3 grid grid-rows-3'>
        <span className='font-bold text-white'>{name}</span>
        <span className=' text-white'>{address}</span>
        <PhoneNumber className='text-white'>{phone_number}</PhoneNumber>
      </div>
    </div>
  );
};

export default WorkShopInfo;
