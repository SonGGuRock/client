import Header from '@/app/shared/ui/modules/header';
import EmailAuthentication from '@/app/widget/auth/email-authentication';

const ResetPasswordAuthenticationPage = () => {
  return (
    <div className='mt-20'>
      <EmailAuthentication />
    </div>
  );
};

export default ResetPasswordAuthenticationPage;
