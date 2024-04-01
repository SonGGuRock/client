import Button from '@/app/shared/ui/atoms/button/Button';
import FormInput from '@/app/shared/ui/modules/FormInput';
import SigninPassword from '@/app/widget/signin/ui/signin-password';

const SignInPage = () => {
  return (
    <div className='py-[124px] px-4'>
      <p className='font-bold text-xl text-grey900 mb-14'>
        예약부터 작품 관리까지,
        <br /> 손꾸락이 도와드릴게요
      </p>
      <div className='w-full flex flex-wrap gap-6 mb-4'>
        <FormInput lableText='이메일' inputPlaceholder='id@ggurak.com' />
        <SigninPassword />
      </div>
      <p className='w-full text-right text-xs text-grey500 mb-14'>
        비밀번호를 잊어버리셨나요?
      </p>

      <div className='flex flex-wrap gap-4'>
        <Button size='large' disabled>
          로그인
        </Button>
        <Button size='large'>이메일로 회원가입</Button>
      </div>
    </div>
  );
};

export default SignInPage;
