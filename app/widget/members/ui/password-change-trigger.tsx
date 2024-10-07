'use client';

import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import { useRouter } from 'next/navigation';

const PasswordResetTrigger = () => {
  const router = useRouter();
  const goToPasswordResetPage = () => {
    router.push('/members/password-change');
  };

  return (
    <div className='relative w-full'>
      <FormInput lableText='비밀번호' inputPlaceholder='********' />
      <Button
        size='small'
        className='absolute bottom-2 right-0'
        onClick={goToPasswordResetPage}
        style='primary'
      >
        변경
      </Button>
    </div>
  );
};

export default PasswordResetTrigger;
