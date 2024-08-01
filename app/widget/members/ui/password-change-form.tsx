'use client';

import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import { FormEvent, useState } from 'react';
import { isPasswordConfirmed } from '@/app/shared/lib/validation-password';

import { useRouter } from 'next/navigation';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';

type PasswordChangeMutateRequest = {
  password: string;
  new_password: string;
};

const ChangePasswordForm = () => {
  const [passwords, setPasswords] = useState({
    prev: '',
    new_first: '',
    new_second: '',
  });

  const { mutate } = useMutateWithCrendetials<PasswordChangeMutateRequest>(
    'members/change/password'
  );
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      {
        method: 'POST',
        body: {
          password: passwords.prev,
          new_password: passwords.new_second,
        },
      },
      {
        onSuccess: () => {
          router.back();
        },
      }
    );
  };
  return (
    <form className='mt-10 flex flex-wrap gap-8' onSubmit={handleSubmit}>
      <FormInput
        lableText='기존 비밀번호'
        inputPlaceholder='기존 비밀번호를 입력해주세요'
        onChange={(e) =>
          setPasswords((prev) => {
            return { ...prev, prev: e.target.value };
          })
        }
      />
      <FormInput
        lableText='새 비밀번호'
        inputPlaceholder='새 비밀번호를 입력해주세요'
        onChange={(e) =>
          setPasswords((prev) => {
            return { ...prev, new_first: e.target.value };
          })
        }
      />
      <FormInput
        lableText='새 비밀번호 확인'
        inputPlaceholder='새 비밀번호를 한번 더 입력해주세요'
        onChange={(e) =>
          setPasswords((prev) => {
            return { ...prev, new_second: e.target.value };
          })
        }
      />
      <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button
          size='large'
          disabled={
            !isPasswordConfirmed({
              passwordFirst: passwords.new_first,
              passwordSecond: passwords.new_second,
            })
          }
          type='submit'
          style='primary'
        >
          변경 완료
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
