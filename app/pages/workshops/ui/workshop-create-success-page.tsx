import Button from '@/app/shared/atoms/button/Button';
import Image from 'next/image';
import Link from 'next/link';

const WorkshopCreateSuccessPage = () => {
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
          공방 등록이 완료되었어요
        </p>
        <p className='text-grey500 text-base text-center'>
          ‘마이-공방 정보 설정’에서 수정할 수 있어요
        </p>
      </div>
      <div className='absolute left-0 bottom-9 w-full px-4'>
        <Link href='/workshops'>
          <Button size='large' type='button'>
            확인
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCreateSuccessPage;
