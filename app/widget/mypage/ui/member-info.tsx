import Thumbnail from '@/app/shared/atoms/Thumbnail';
import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import IconArrowRight from '@/app/shared/atoms/icons/icon-arrow-right';
import PhoneNumber from '@/app/shared/modules/phone-number';
import Link from 'next/link';
export type MypageMemberInfo = {
  id: number;
  name: string;
  phone_number: string;
  profile_picture: string;
  email: string;
  birthday: string;
};

interface MemberInfoProps {
  myPageMember: MypageMemberInfo;
}

const MemberInfo = ({
  myPageMember: { id, name, profile_picture },
}: MemberInfoProps) => {
  return (
    <Link
      href={`/members/${id}`}
      className='flex gap-4 w-full justify-between items-center'
    >
      <div className='flex gap-4 items-center'>
        <Thumbnail
          id={id}
          size='medium'
          imageUrl={profile_picture}
          type='member'
        />
        <Title size='large'>{name}</Title>
      </div>
      <Button className='rounded-lg bg-grey100 text-sm !py-2'>내 정보</Button>
    </Link>
  );
};

export default MemberInfo;
