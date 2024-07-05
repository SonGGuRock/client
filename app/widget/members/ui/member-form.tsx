'use client';

import Button from '@/app/shared/atoms/button/Button';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import FormInput from '@/app/shared/modules/FormInput';
import ImageUploader from '@/app/shared/modules/image-uploader/ImageUploader';
import { ChangeEvent, FormEvent, useState } from 'react';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';
import FormDateInput from '@/app/shared/modules/form-date-input';
import formatCalendarDate from '@/app/shared/lib/formatCalendarDate';
import { removeHyphens } from '@/app/shared/lib/removeHypens';
import { MemberMutateRequest } from '../lib/type';

interface MemberFormProps {
  initialData?: MemberMutateRequest;
  onSubmit: (data: MemberMutateRequest) => void;
}

const MemberForm = ({ initialData, onSubmit }: MemberFormProps) => {
  const [memberForm, setMemberForm] = useState<MemberMutateRequest>(
    initialData || {
      profile_picture: '',
      name: '',
      phone_number: '',
      birthday: formatCalendarDate(new Date()),
      email: '',
    }
  );

  const handleUpload = (url: string) => {
    setMemberForm((prev) => {
      return { ...prev, profile_picture: url };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('profile_picture', memberForm.profile_picture);
    formData.append('phone_number', formatPhoneNumber(memberForm.phone_number));
    const body = formDataToJSON(formData) as MemberMutateRequest;

    onSubmit(body);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSelect = (value: { [key: string]: string }) => {
    setMemberForm((prev) => {
      return {
        ...prev,
        ...value,
      };
    });
  };

  const isDisabled = Object.values(memberForm).some((value) => value === '');

  return (
    <div className='relative'>
      <ImageUploader
        onUpload={handleUpload}
        uploaded={memberForm.profile_picture}
        defaultImage={{
          imageUrl: memberForm.profile_picture,
          imageAlt: '회원 등록 기본',
          width: 88,
          height: 88,
          className: 'object-cover',
        }}
      />
      <form className='flex flex-wrap gap-6' onSubmit={handleSubmit}>
        <FormInput
          name='name'
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
          value={memberForm.name}
          onChange={handleChange}
          defaultValue={memberForm.name}
        />
        <FormDateInput
          labelText='생년월일'
          name='birthday'
          onSelect={handleSelect}
          defaultValue={memberForm.birthday}
        />

        <FormInput
          name='email'
          lableText='이메일'
          inputPlaceholder='이메일 입력해주세요'
          onChange={handleChange}
          defaultValue={memberForm.email}
        />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='전화번호를 입력해주세요 (하이픈 제외)'
          value={removeHyphens(memberForm.phone_number)}
          onChange={handleChange}
          maxLength={11}
          defaultValue={removeHyphens(memberForm.phone_number)}
        />
        <Button
          size='small'
          type='submit'
          disabled={isDisabled}
          style='primary'
          className='absolute right-0 top-[-38px]'
        >
          완료
        </Button>
      </form>
    </div>
  );
};

export default MemberForm;
