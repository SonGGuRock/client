'use client';

import CloseButton from '@/app/shared/atoms/close-button';
import EmailAuthentication from '@/app/widget/auth/email-authentication';
import useEmailContext from '@/app/widget/auth/signup/api/useSignupEmailContext';

const SignupAuthenticationPage = () => {
  const { email } = useEmailContext();

  return (
    <div className='relative px-4 pt-[124px] min-h-screen'>
      <CloseButton className='absolute top-0 right-3' />
      <EmailAuthentication email={email} />
    </div>
  );
};

export default SignupAuthenticationPage;
