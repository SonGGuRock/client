'use client';

import isValidVerficationCode from '@/app/shared/lib/validation-verification-code';
import { ChangeEvent, useRef, useState } from 'react';

interface VerificationCodeProps {
  codeLength?: number;
  onComplete: (isCompleted: boolean) => void;
}

const VerificationCode = ({
  codeLength = 6,
  onComplete,
}: VerificationCodeProps) => {
  const [borderColors, setBorderColors] = useState<
    ('border-grey200' | 'border-brown')[]
  >([
    'border-grey200',
    'border-grey200',
    'border-grey200',
    'border-grey200',
    'border-grey200',
    'border-grey200',
  ]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBorderColors((prev) => {
      const newColors = [...prev];
      newColors[index] = 'border-brown';
      return newColors;
    });
    if (value && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (value && index === codeLength - 1) {
      const code = inputRefs.current.map((ref) => ref?.value || '').join('');
      const isValid = isValidVerficationCode(code);
      onComplete(isValid);
    }
  };

  const resetInputs = () => {
    inputRefs.current.forEach((ref) => {
      if (ref) {
        ref.value = '';
      }
    });
    inputRefs.current[0]?.focus();
  };
  return (
    <>
      <div className='flex gap-2'>
        {Array.from({ length: codeLength }).map((_, idx) => (
          <input
            key={idx}
            className={`text-lg text-grey900 font-bold w-8 h-10 border-b-2 ${borderColors[idx]} text-center`}
            type='text'
            autoFocus={idx === 0}
            minLength={1}
            maxLength={1}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(idx, event)
            }
            ref={(el) => (inputRefs.current[idx] = el)}
          />
        ))}
      </div>
      <div
        onClick={resetInputs}
        className='w-full text-right mt-4 pr-2 text-grey400 underline decoration-solid text-xs'
      >
        다시 입력
      </div>
    </>
  );
};

export default VerificationCode;
