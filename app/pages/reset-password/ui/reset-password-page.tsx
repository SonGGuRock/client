'use client';

import Title from '@/app/shared/atoms/Title';
import EmailAuthCodeSender from '@/app/widget/auth/signup/email-auth-code-sender';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const router = useRouter();
  const handleValidationSuccess = () => {
    router.push('/reset-password/code');
  };
  return (
    <div>
      <div className='pt-[77px] flex gap-10 flex-wrap'>
        <Title size='large'>가입한 이메일 주소를 입력해주세요</Title>
        <EmailAuthCodeSender
          isAuthenticated={false}
          isNewMember={false}
          onValidationSuccess={handleValidationSuccess}
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
