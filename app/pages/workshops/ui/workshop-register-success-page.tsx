import Button from '@/app/shared/atoms/button/Button';
import Image from 'next/image';
import Link from 'next/link';

const WorkshopRegisterSuccessPage = () => {
  return (
    <div className='px-4 pt-[240px] min-h-screen relative'>
      <div className=''>
        <Image
          src='/img/check-circle-brown.png'
          alt='완료'
          width={60}
          height={60}
          className='block text-center mx-auto'
        />
        <p className='text-lg font-bold text-grey900 text-center mt-4'>
          등록 신청이 완료되었어요
        </p>
        <p className='text-grey500 text-base text-center'>
          승인되면 알림을 보내드릴게요
        </p>
      </div>
      <div className='absolute left-0 bottom-9 w-full px-4'>
        <Link href='/workshops'>
          <Button size='large' type='button' style='primary'>
            확인
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopRegisterSuccessPage;
