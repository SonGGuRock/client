import Thumbnail from '@/app/shared/atoms/Thumbnail';
import Title from '@/app/shared/atoms/Title';
import IconArrowRight from '@/app/shared/atoms/icons/icon-arrow-right';
import PhoneNumber from '@/app/shared/modules/phone-number';

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
