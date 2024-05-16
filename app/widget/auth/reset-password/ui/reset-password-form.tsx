'use client';

import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import useEmailContext from '../../signup/api/useSignupEmailContext';
import { FormEvent, useState } from 'react';
import { isPasswordConfirmed } from '@/app/shared/lib/validation-password';
import useResetPassword from '../api/useResetPassword';
import { useRouter } from 'next/navigation';

const ResetPasswordForm = () => {
  const { email } = useEmailContext();
  const [passwords, setPasswords] = useState({
    passwordFirst: '',
    passwordSecond: '',
  });

  const { mutate } = useResetPassword();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { email, password: passwords.passwordSecond },
      { onSuccess: () => router.push('/reset-password/success') }
    );
  };
  return (
    <form className='mt-10 flex flex-wrap gap-8' onSubmit={handleSubmit}>
      <FormInput
        lableText='새 비밀번호'
        inputPlaceholder='새 비밀번호를 입력해주세요'
        onChange={(e) =>
          setPasswords((prev) => {
            return { ...prev, passwordFirst: e.target.value };
          })
        }
      />
      <FormInput
        lableText='새 비밀번호 확인'
        inputPlaceholder='새 비밀번호를 한번 더 입력해주세요'
        onChange={(e) =>
          setPasswords((prev) => {
            return { ...prev, passwordSecond: e.target.value };
          })
        }
      />
      <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button
          size='large'
          disabled={!isPasswordConfirmed(passwords)}
          type='submit'
        >
          변경 완료
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
