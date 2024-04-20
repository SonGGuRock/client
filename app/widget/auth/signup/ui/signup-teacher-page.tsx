'use client';

import useToggle from '@/app/shared/lib/useToggle';
import CheckBox from '@/app/shared/ui/atoms/CheckBox';
import Button from '@/app/shared/ui/atoms/button/Button';
import FormInput from '@/app/shared/ui/modules/FormInput';
import FormSelect from '@/app/shared/ui/modules/FormSelect';
import Header from '@/app/shared/ui/modules/header';
import Image from 'next/image';
import Link from 'next/link';

const SignupTeacherPage = () => {
  const { open: isChecked, toggle } = useToggle();
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>선생님 회원가입</Header.Title>
        </div>
      </Header>

      <div className='flex gap-6 pt-4 flex-wrap pb-12'>
        <div className='relative w-full'>
          <FormInput
            lableText='이메일'
            inputPlaceholder='이메일을 입력해주세요'
          >
            <div className='absolute right-0 bottom-2'>
              <Link href='/signup/authentication'>
                <Button size='small'>인증하기</Button>
              </Link>
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
        </div>
        <FormInput
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
        />
        <FormInput
          lableText='비밀번호'
          inputPlaceholder='비밀번호를 입력해주세요'
        />
        <FormSelect labelText='생년월일' />
        <FormInput lableText='전화번호' inputPlaceholder='- 구분없이 입력' />
      </div>
      <div className='mt-18 flex gap-4 flex-wrap mb-8'>
        <div className='flex gap-1 w-full'>
          <CheckBox onCheck={toggle} isChecked={isChecked} style='grey' />
          <label className='text-grey700 text-sm'>이용약관 (필수)</label>
        </div>
        <div className='flex gap-1 w-full'>
          <CheckBox onCheck={toggle} isChecked={isChecked} style='grey' />
          <label className='text-grey700 text-sm'>
            개인정보 수집 및 이용 (필수)
          </label>
        </div>
      </div>
      <Button size='large' disabled>
        가입 완료
      </Button>
    </div>
  );
};

export default SignupTeacherPage;
