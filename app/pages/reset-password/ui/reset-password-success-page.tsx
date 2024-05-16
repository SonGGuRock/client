import Button from '@/app/shared/atoms/button/Button';
import Image from 'next/image';
import Link from 'next/link';

const ResetPasswordSuccessPage = () => {
  return (
    <div className='px-4 pt-[140px] min-h-[600px] relative  '>
      <div className=''>
        <Image
          src='/img/check-circle-brown.png'
          alt='완료'
          width={60}
          height={60}
          className='block text-center mx-auto'
        />
        <p className='text-lg font-bold text-grey900 text-center mt-4'>
          비밀번호가 변경되었어요
        </p>
        <p className='text-grey500 text-base text-center'>
          다시 로그인을 진행해주세요!
        </p>
      </div>
      <div className='absolute left-0 bottom-0 w-full'>
        <Link href='/signin'>
          <Button size='large' type='button'>
            확인
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordSuccessPage;
