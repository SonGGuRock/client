import Button from '@/app/shared/atoms/button/Button';
import Image from 'next/image';

const WorkshopRegisterPage = () => {
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
        <Button size='large'>확인</Button>
      </div>
    </div>
  );
};

export default WorkshopRegisterPage;
