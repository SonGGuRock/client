import Image from 'next/image';
import Link from 'next/link';

const MemberTypeCard = () => {
  return (
    <div className='flex gap-2 w-full'>
      <div className='bg-grey50 rounded-lg flex flex-wrap items-center justify-center py-5 gap-4'>
        <Image
          src='/img/student-charactar.png'
          alt='수강생 캐릭터'
          width={100}
          height={100}
        />
        <p className='w-full text-center'>수강생</p>
      </div>
      <Link href='/signup/teacher'>
        <div className='bg-grey50 rounded-lg flex flex-wrap items-center justify-center py-5 gap-4'>
          <Image
            src='/img/teacher-charactar.png'
            alt='선생님 캐릭터'
            width={100}
            height={100}
          />
          <p className='w-full text-center'>선생님</p>
        </div>
      </Link>
    </div>
  );
};

export default MemberTypeCard;
