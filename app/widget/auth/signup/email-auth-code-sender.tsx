'use client';

import Button from '@/app/shared/atoms/button/Button';
import isValidEmail from '@/app/shared/lib/validation-email';
import FormInput from '@/app/shared/modules/FormInput';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import useVerificationEmail from './api/useVerificationEmail';
import useEmailContext from './api/useSignupEmailContext';

interface EmailAuthCodeSenderProps {
  isAuthenticated: boolean;
  isNewMember: boolean;
  onValidationSuccess: () => void;
}
const EmailAuthCodeSender = ({
  isAuthenticated,
  isNewMember,
  onValidationSuccess,
}: EmailAuthCodeSenderProps) => {
  const { email, set } = useEmailContext();
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = useVerificationEmail();

  const onSubmitSuccess = () => {
    setErrorMessage('');
    mutate(
      { is_new_member: isNewMember, email },
      { onSuccess: onValidationSuccess }
    );
  };

  const onSubmitFail = () => {
    setErrorMessage('유효한 이메일 주소를 입력해주세요');
  };
  const handleClick = () => {
    isValidEmail(email) ? onSubmitSuccess() : onSubmitFail();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    set(e.target.value);
  };
  return (
    <div className='relative w-full'>
      <FormInput
        name='email'
        type='email'
        lableText='이메일'
        required={true}
        inputPlaceholder='id@ggurak.com'
        onChange={!isAuthenticated ? handleChange : undefined}
        value={isAuthenticated ? email : undefined}
      >
        <div className='absolute right-0 top-8'>
          {!isAuthenticated ? (
            <Button
              size='small'
              onClick={handleClick}
              type='button'
              disabled={!isValidEmail(email)}
            >
              인증하기
            </Button>
          ) : (
            <Image
              src='/icon/ic-check-24px.svg'
              alt='인증 완료 아이콘'
              width={24}
              height={24}
            />
          )}
        </div>
      </FormInput>
      {errorMessage && (
        <p className='text-xs text-error mt-1'>{errorMessage}</p>
      )}
    </div>
  );
};

export default EmailAuthCodeSender;
