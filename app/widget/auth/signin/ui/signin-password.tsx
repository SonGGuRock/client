'use client';

import useToggle from '@/app/shared/lib/useToggle';
import FormInput from '@/app/shared/ui/modules/FormInput';
import Image from 'next/image';

const SigninPassword = () => {
  const { open: visible, toggle } = useToggle();
  return (
    <div className='relative w-full'>
      <FormInput lableText='비밀번호' inputPlaceholder='' />
      <Image
        className='absolute right-0 bottom-2 opacity-50'
        src={`/icon/ic-eye-${visible ? 'on' : 'off'}-24px.svg`}
        alt='비밀번호 글자 보기 아이콘'
        width={24}
        height={24}
      />
    </div>
  );
};

export default SigninPassword;
