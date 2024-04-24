'use client';

import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import VerificationCode from './verification-code';
import { useState } from 'react';
import CountDownTimer from '@/app/shared/modules/countdown/countdown-timer';
import { useRouter } from 'next/navigation';

type ValidationStatus = 'awaiting' | 'inactive' | 'active' | 'expired';

const EmailAuthentication = () => {
  const router = useRouter();
  const [status, setStatus] = useState<ValidationStatus>('awaiting');
  const handleComplete = (isCompleted: boolean) => {
    setStatus(isCompleted ? 'active' : 'inactive');
  };

  const handleExpired = () => {
    setStatus('expired');
  };

  const handleSubmit = () => {
    router.push('/reset-password/authentication/success');
  };
  return (
    <div className='h-full '>
      <Title size='large'>이메일로 인증 코드를 보냈어요</Title>
      <p className='text-grey800 text-sm'>
        ggurak@gmail.com 으로 전송된 코드를 입력해주세요
      </p>
      <div className=' px-14 py-20 flex flex-wrap justify-center gap-2'>
        <VerificationCode onComplete={handleComplete} />
        <CountDownTimer onZero={handleExpired} />
      </div>

      <div className='absolute bottom-9 left-0 w-full px-4'>
        <div className='text-sm w-full text-center text-error mb-2'>
          {status === 'inactive' && '올바른 인증 코드를 입력하세요'}{' '}
          {status === 'expired' &&
            '인증 시간이 만료되었습니다. 다시 시도하세요'}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={status !== 'active'}
          size='large'
        >
          인증하기
        </Button>
      </div>
    </div>
  );
};

export default EmailAuthentication;
