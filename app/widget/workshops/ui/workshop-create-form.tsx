'use client';

import FormInput from '@/app/shared/modules/FormInput';
import AddressInput from '@/app/shared/modules/address-input';
import WorkshopImageUploader from './workshop-image-uploader';
import { FormEvent, useState } from 'react';
import Button from '@/app/shared/atoms/button/Button';
import useWorkshopCreate from '../api/useWorkshopCreate';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import { WorkshopCreateRequest } from '../api/type';

const WorkshopCreateForm = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { mutate } = useWorkshopCreate();
  const handleUpload = (url: string) => {
    setImageUrl(url);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('profile_picture', imageUrl);
    const body = formDataToJSON(formData);
    mutate(body as WorkshopCreateRequest);
  };
  return (
    <div className='relative'>
      <WorkshopImageUploader onUpload={handleUpload} />
      <form className='flex flex-wrap gap-6' onSubmit={handleSubmit}>
        <FormInput
          name='name'
          lableText='공방 이름'
          inputPlaceholder='공방의 이름을 입력해주세요'
        />
        <AddressInput />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='공방의 대표 전화번호를 입력해주세요'
        />
        <Button
          size='small'
          type='submit'
          className='absolute right-0 top-[-38px]'
        >
          등록
        </Button>
      </form>
    </div>
  );
};
export default WorkshopCreateForm;
