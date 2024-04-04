import CloseButton from '@/app/shared/ui/atoms/close-button';
import EmailAuthentication from '@/app/widget/auth/email-authentication';

const SignupAuthenticationPage = () => {
  return (
    <div className='relative px-4 pt-[124px] min-h-screen'>
      <CloseButton className='absolute top-0 right-3' />
      <EmailAuthentication />
    </div>
  );
};

export default SignupAuthenticationPage;
