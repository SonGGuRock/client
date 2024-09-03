'use client';

import Button from '@/app/shared/atoms/button/Button';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import FormInput from '@/app/shared/modules/FormInput';
import ImageUploader from '@/app/shared/modules/image-uploader/ImageUploader';
import { ChangeEvent, FormEvent, useState } from 'react';
import { StudentMutateRequest } from '../lib/type';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';
import FormDateInput from '@/app/shared/modules/form-date-input';
import formatCalendarDate from '@/app/shared/lib/formatCalendarDate';
import { removeHyphens } from '@/app/shared/lib/removeHypens';

interface StudentFormProps {
  initialData?: StudentMutateRequest;
  onSubmit: (data: StudentMutateRequest) => void;
}

const StudentForm = ({ initialData, onSubmit }: StudentFormProps) => {
  const [studentForm, setStudentForm] = useState<StudentMutateRequest>(
    initialData || {
      profile_picture: '',
      name: '',
      phone_number: '',
      register_date: formatCalendarDate(new Date()),
      last_payment_date: formatCalendarDate(new Date()),
      memo: '',
    }
  );

  const handleUpload = (url: string) => {
    setStudentForm((prev) => {
      return { ...prev, profile_picture: url };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('profile_picture', studentForm.profile_picture);
    formData.append(
      'phone_number',
      formatPhoneNumber(studentForm.phone_number)
    );
    const body = formDataToJSON(formData) as StudentMutateRequest;

    onSubmit(body);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSelect = (value: { [key: string]: string }) => {
    setStudentForm((prev) => {
      return {
        ...prev,
        ...value,
      };
    });
  };

  const isDisabled = (
    Object.keys(studentForm) as (keyof StudentMutateRequest)[]
  )
    .filter((key) => key !== 'memo')
    .some((key) => studentForm[key] === '');

  return (
    <div className='relative'>
      <ImageUploader
        onUpload={handleUpload}
        uploaded={studentForm.profile_picture}
        defaultImage={{
          imageUrl: !!studentForm.profile_picture
            ? studentForm.profile_picture
            : '/img/profile_default.png',
          imageAlt: '수강생 등록 기본',
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
          value={studentForm.name}
          onChange={handleChange}
          defaultValue={studentForm.name}
        />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='전화번호를 입력해주세요 (하이픈 제외)'
          value={removeHyphens(studentForm.phone_number)}
          onChange={handleChange}
          maxLength={11}
          defaultValue={removeHyphens(studentForm.phone_number)}
        />
        <FormDateInput
          labelText='등록일'
          name='register_date'
          onSelect={handleSelect}
          defaultValue={studentForm.register_date}
        />
        <FormDateInput
          labelText='결제일'
          name='last_payment_date'
          onSelect={handleSelect}
          defaultValue={studentForm.last_payment_date}
        />
        <FormInput
          name='memo'
          lableText='메모(선택)'
          inputPlaceholder=''
          value={studentForm.memo}
          onChange={handleChange}
          defaultValue={studentForm.memo}
        />
        <Button
          size='small'
          type='submit'
        style='primary'
          disabled={isDisabled}
          className='absolute right-0 top-[-38px]'
        >
          등록
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
