import CodeAuthenticator from '@/app/widget/auth/code-authenticator';
import useEmailContext from '@/app/widget/auth/signup/api/useSignupEmailContext';

const ResetPasswordAuthenticationPage = () => {
  const { email } = useEmailContext();
  return (
    <div className='mt-20'>
      <CodeAuthenticator email={email} />
    </div>
  );
};

export default ResetPasswordAuthenticationPage;
