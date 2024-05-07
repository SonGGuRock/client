import CloseButton from '@/app/shared/atoms/close-button';
import EmailAuthentication from '@/app/widget/auth/email-authentication';

const SignupAuthenticationPage = () => {
  return (
    <div className='relative px-4 pt-[124px] min-h-screen'>
      <CloseButton className='absolute top-0 right-3' />
      <EmailAuthentication email='cwd05011@gmail.com' />
    </div>
  );
};

export default SignupAuthenticationPage;
