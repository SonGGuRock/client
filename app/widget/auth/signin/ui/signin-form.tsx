'use client';

import FormInput from '@/app/shared/modules/FormInput';
import SigninPassword from './signin-password';
import Link from 'next/link';
import Button from '@/app/shared/atoms/button/Button';
import { FormEventHandler, useRef } from 'react';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import useSigninForm from '../api/useSigninForm';
import { Credentials } from '../api/type';

const SigninForm = () => {
  const { mutate } = useSigninForm();
  // const { mutate } = useMutateWithCrendetials('members/login');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    const body = formDataToJSON(formData);
    mutate(body as Credentials);
    // mutate({ method: 'POST', body: body as Credentials });
  };

  return (
    <form
      ref={formRef}
      className='w-full flex flex-wrap gap-6 mb-4'
      onSubmit={handleSubmit}
    >
      <FormInput
        lableText='이메일'
        inputPlaceholder='id@ggurak.com'
        type='text'
        name='email'
      />
      <SigninPassword />

      <p className='w-full text-right text-xs text-grey500 mb-14'>
        <Link href='/reset-password'>비밀번호를 잊어버리셨나요?</Link>
      </p>

      <Button size='large' type='submit'>
        로그인
      </Button>
    </form>
  );
};

export default SigninForm;
