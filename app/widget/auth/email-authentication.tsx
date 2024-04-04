import Title from '@/app/shared/ui/atoms/Title';
import Button from '@/app/shared/ui/atoms/button/Button';

const EmailAuthentication = () => {
  return (
    <div className='h-full '>
      <Title size='large'>이메일로 인증 코드를 보냈어요</Title>
      <p className='text-grey800 text-sm'>
        ggurak@gmail.com 으로 전송된 코드를 입력해주세요
      </p>
      <div className='flex gap-2 px-14 py-20'>
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
        <input className='text-lg text-grey900 font-bold w-8 h-10 border-b-2 border-grey200' />
      </div>

      <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button disabled size='large'>
          인증 완료
        </Button>
      </div>
    </div>
  );
};

export default EmailAuthentication;
