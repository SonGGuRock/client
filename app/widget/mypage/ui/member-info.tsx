import Thumbnail from '@/app/shared/ui/atoms/Thumbnail';
import Title from '@/app/shared/ui/atoms/Title';
import IconArrowRight from '@/app/shared/ui/atoms/icons/icon-arrow-right';
import PhoneNumber from '@/app/shared/ui/modules/phone-number';
import Image from 'next/image';
import Link from 'next/link';

const MemberInfo = () => {
  return (
    <Link href='/members/1' className='flex gap-4 w-full justify-between'>
      <div className='flex gap-4 '>
        <Thumbnail id={1} size='medium' />
        <div className='grid grid-rows-2 items-center'>
          <Title size='small'>최지영</Title>
          <PhoneNumber>010-1234-5678</PhoneNumber>
        </div>
      </div>
      <IconArrowRight />
    </Link>
  );
};

export default MemberInfo;
