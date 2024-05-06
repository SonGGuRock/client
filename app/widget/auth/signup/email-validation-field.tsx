'use client';

import Button from '@/app/shared/atoms/button/Button';
import { POST } from '@/app/shared/api/fetch';
import isValidEmail from '@/app/shared/lib/validation-email';
import FormInput from '@/app/shared/modules/FormInput';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { VerficationEmailRequest, VerificationEmailResponse } from './api/type';

const EmailValidationField = () => {
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const { isLoading, isError, data, error, refetch, isFetched } = useQuery({
    queryKey: ['signup'],
    queryFn: async () => {
      return POST<VerficationEmailRequest, VerificationEmailResponse>(
        'members/verifications/emails',
        {
          is_new_member: true,
          email: emailValue,
        }
      );
    },
    enabled: false,
  });

  const onSubmitSuccess = () => {
    refetch();
    // router.push('/signup/authentication');
  };

  const onSubmitFail = () => {
    setErrorMessage('유효한 이메일 주소를 입력해주세요');
  };
  const handleClick = () => {
    isValidEmail(emailValue) ? onSubmitSuccess() : onSubmitFail();
  };

  const handleChange = (value: string) => {
    setEmailValue(value);
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
