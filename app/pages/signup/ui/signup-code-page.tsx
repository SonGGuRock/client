'use client';

import CloseButton from '@/app/shared/atoms/close-button';
import CodeAuthenticator from '@/app/widget/auth/code-authenticator';
import useEmailContext from '@/app/widget/auth/signup/api/useSignupEmailContext';
import { useRouter } from 'next/navigation';

const SignupCodePage = () => {
  const { email } = useEmailContext();
  const router = useRouter();
  const handleAuthSuccess = () => {
    router.push('/signup/teacher?authenticated=1');
  };
  return (
    <div className='relative px-4 pt-[124px] min-h-screen'>
      <CloseButton className='absolute top-0 right-3' />
      <CodeAuthenticator email={email} onAuthSuccess={handleAuthSuccess} />
    </div>
  );
};

export default SignupCodePage;