'use client';

import Button from '@/app/shared/atoms/button/Button';
import isValidEmail from '@/app/shared/lib/validation-email';
import FormInput from '@/app/shared/modules/FormInput';
import Image from 'next/image';
import { useState } from 'react';
import useVerificationEmaiil from './api/useVerificationEmail';

const EmailValidationField = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = useVerificationEmaiil(email);

  const onSubmitSuccess = () => {
    setErrorMessage('');
    mutate({ is_new_member: true, email });
  };

  const onSubmitFail = () => {
    setErrorMessage('유효한 이메일 주소를 입력해주세요');
  };
  const handleClick = () => {
    isValidEmail(email) ? onSubmitSuccess() : onSubmitFail();
  };

  const handleChange = (value: string) => {
    setEmail(value);
  };
  return (
    <div className='relative w-full'>
      <FormInput
        lableText='이메일'
        inputPlaceholder='이메일을 입력해주세요'
        onChange={handleChange}
      >
        <div className='absolute right-0 top-8'>
          {/* <Link href='/signup/authentication'> */}
          <Button size='small' onClick={handleClick}>
            인증하기
          </Button>
          {/* </Link> */}
          {false && (
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

export default EmailValidationField;
