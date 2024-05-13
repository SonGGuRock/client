'use client';

import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import isValidEmail from '@/app/shared/lib/validation-email';
import FormInput from '@/app/shared/modules/FormInput';
import EmailValidationField from '@/app/widget/auth/signup/email-validation-field';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const ResetPasswordPage = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/reset-password/authentication');
  };

  return (
    <div>
      <div className='pt-[77px] flex gap-10 flex-wrap'>
        <Title size='large'>가입한 이메일 주소를 입력해주세요</Title>
        <EmailValidationField isAuthenticated={false} isNewMember={false} />
      </div>

      {/* <FormInput
        value={inputValue}
        lableText='이메일'
        inputPlaceholder='id@ggurak.com'
      /> */}
      {/* <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button
          size='large'
          disabled={!isValidEmail(inputValue)}
          onClick={handleSubmit}
        >
          이메일 인증하기
        </Button>
      </div> */}
    </div>
  );
};

export default ResetPasswordPage;
