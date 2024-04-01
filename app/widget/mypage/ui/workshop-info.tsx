import PhoneNumber from '@/app/shared/ui/modules/phone-number';
import Image from 'next/image';

interface WorkShopInfo {
  id: number;
  name: string;
  address: string;
  phone_number: string;
}

const WorkShopInfo = ({ name, address, phone_number }: WorkShopInfo) => {
  return (
    <div className='relative my-6'>
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
