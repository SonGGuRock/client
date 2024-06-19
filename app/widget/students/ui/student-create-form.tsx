'use client';

import Button from '@/app/shared/atoms/button/Button';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import FormInput from '@/app/shared/modules/FormInput';
import ImageUploader from '@/app/shared/modules/image-uploader/ImageUploader';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { StudentCreateRequest } from '../lib/type';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';
import FormDateInput from '@/app/shared/modules/form-date-input';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import { Query, QueryKey, useQueryClient } from '@tanstack/react-query';

const StudentCreateForm = () => {
  const queryClient = useQueryClient();
  const [studentForm, setStudentForm] = useState<StudentCreateRequest>({
    profile_picture: '',
    name: '',
    phone_number: '',
    register_date: '',
    last_payment_date: '',
    memo: '',
  });
  const { mutate } = useMutateWithCrendetials('students');
  const router = useRouter();

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

    const body = formDataToJSON(formData);
    console.log('✅', body);
    mutate(
      {
        method: 'POST',
        body: body as StudentCreateRequest,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey.some((key) => {
                return Array.isArray(key) && key.includes('students');
              });
            },
          });
          window.location.href = '/students';
          // router.push('/students');
          // router.push('/student/create/success')
        },
      }
    );
  };

  useEffect(() => {
    console.log(studentForm);
  }, [studentForm]);

  const isDisabled = Object.values(studentForm).includes('');

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
  return (
    <div className='relative'>
      <ImageUploader
        onUpload={handleUpload}
        uploaded={studentForm.profile_picture}
        defaultImage={{
          imageUrl: '/img/profile_default.png',
          imageAlt: '수강생 등록 기본',
          width: 88,
          height: 88,
          className: 'object-contain',
        }}
      />
      <form className='flex flex-wrap gap-6' onSubmit={handleSubmit}>
        <FormInput
          name='name'
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
          value={studentForm.name}
          onChange={handleChange}
        />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='전화번호를 입력해주세요 (하이픈 제외)'
          value={studentForm.phone_number}
          onChange={handleChange}
          maxLength={11}
        />
        <FormDateInput
          labelText='등록일'
          name='register_date'
          onSelect={handleSelect}
        />
        <FormDateInput
          labelText='결제일'
          name='last_payment_date'
          onSelect={handleSelect}
        />
        <FormInput
          name='memo'
          lableText='메모(선택)'
          inputPlaceholder=''
          value={studentForm.memo}
          onChange={handleChange}
        />
        <Button
          size='small'
          type='submit'
          disabled={isDisabled}
          className='absolute right-0 top-[-38px]'
        >
          등록
        </Button>
      </form>
    </div>
  );
};

export default StudentCreateForm;
