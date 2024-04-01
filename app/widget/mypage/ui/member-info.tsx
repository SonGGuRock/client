import Thumbnail from '@/app/shared/ui/atoms/Thumbnail';
import Title from '@/app/shared/ui/atoms/Title';
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
      <Image
        src='icon/ic-arrow-right-20px.svg'
        alt=' 이동용 화살표 아이콘'
        width={18}
        height={18}
      />
    </Link>
  );
};

export default MemberInfo;
