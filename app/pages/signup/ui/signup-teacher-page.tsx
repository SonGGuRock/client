'use client';

import useToggle from '@/app/shared/lib/useToggle';
import CheckBox from '@/app/shared/atoms/CheckBox';
import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import FormDateInput from '@/app/shared/modules/form-date-input';
import Header from '@/app/shared/modules/header';

import EmailAuthCodeSender from '../../../widget/auth/signup/email-auth-code-sender';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEventHandler, useRef } from 'react';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import useSignupForm from '../../../widget/auth/signup/api/useSignupForm';
import { SignupRequest } from '../../../widget/auth/signup/api/type';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';

const SUCCESS = '1';

const SignupTeacherPage = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const isAuthenticated = searchParam.get('authenticated') === SUCCESS;
  const path = usePathname();

  const handleValidationSuccess = () => {
    router.push('/signup/authentication/code');
  };

  const { mutate } = useSignupForm();

  const { open: isChecked, toggle } = useToggle();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    const phoneNumber: FormDataEntryValue | null = formData.get('phone_number');
    if (phoneNumber && typeof phoneNumber === 'string') {
      const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      formData.set('phone_number', formattedPhoneNumber);
    }

    const userType = path.includes('teacher') ? 'teacher' : 'student';
    formData.set('user_type', userType);

    const body = formDataToJSON(formData);
    mutate(body as SignupRequest, {
      onSuccess: () => {
        router.push('/signin');
      },
    });
  };

  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>선생님 회원가입</Header.Title>
        </div>
      </Header>

      <form
        ref={formRef}
        className='flex gap-6 pt-4 flex-wrap pb-12'
        onSubmit={handleSubmit}
      >
        <EmailAuthCodeSender
          isAuthenticated={isAuthenticated}
          isNewMember={true}
          onValidationSuccess={handleValidationSuccess}
        />

        <FormInput
          name='name'
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
        />
        <FormInput
          name='password'
          type='password'
          lableText='비밀번호'
          inputPlaceholder='비밀번호를 입력해주세요'
        />
        <FormDateInput name='birthday' required={true} labelText='생년월일' />
        <FormInput
          name='phone_number'
          type='tel'
          maxLength={11}
          lableText='전화번호'
          inputPlaceholder='- 구분없이 입력'
        />

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
        <Button size='large' type='submit'>
          가입 완료
        </Button>
      </form>
    </div>
  );
};

export default SignupTeacherPage;
