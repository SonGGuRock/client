import Title from '@/app/shared/atoms/Title';
import ResetPasswordForm from '@/app/widget/auth/reset-password/ui/reset-password-form';

const AuthenticationSuccessPage = () => {
  return (
    <div className='mt-20'>
      <Title size='large'>비밀번호 변경</Title>
      <ResetPasswordForm />
    </div>
  );
};

export default AuthenticationSuccessPage;
