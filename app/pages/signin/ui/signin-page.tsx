import Button from '@/app/shared/atoms/button/Button';
import SigninForm from '@/app/widget/auth/signin/ui/signin-form';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className='py-[124px] px-4'>
      <p className='font-bold text-xl text-grey900 mb-14'>
        예약부터 작품 관리까지,
        <br /> 손꾸락이 도와드릴게요
      </p>
      <SigninForm />
      <Button size='large' type='button' style='secondary'>
        <Link href='/signup'>이메일로 회원가입</Link>
      </Button>
    </div>
  );
};

export default SignInPage;
