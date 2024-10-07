'use client';

import Button from '@/app/shared/atoms/button/Button';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import FormInput from '@/app/shared/modules/FormInput';
import ImageUploader from '@/app/shared/modules/image-uploader/ImageUploader';
import { ChangeEvent, FormEvent, useState } from 'react';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';
import { removeHyphens } from '@/app/shared/lib/removeHypens';
import { WorkshopMutateRequest } from '../api/type';

interface WorkshopFormProps {
  initialData?: WorkshopMutateRequest;
  onSubmit: (data: WorkshopMutateRequest) => void;
}

const WorkshopForm = ({ initialData, onSubmit }: WorkshopFormProps) => {
  const [workshopForm, setWorkshopForm] = useState<WorkshopMutateRequest>(
    initialData || {
      profile_picture: '',
      name: '',
      phone_number: '',
      address: '',
    }
  );

  const handleUpload = (url: string) => {
    setWorkshopForm((prev) => {
      return { ...prev, profile_picture: url };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('profile_picture', workshopForm.profile_picture);
    formData.append(
      'phone_number',
      formatPhoneNumber(workshopForm.phone_number)
    );
    const body = formDataToJSON(formData) as WorkshopMutateRequest;

    onSubmit(body);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkshopForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const isDisabled = Object.values(workshopForm).some((value) => value === '');

  return (
    <div className='relative'>
      <ImageUploader
        onUpload={handleUpload}
        uploaded={workshopForm.profile_picture}
        defaultImage={{
          imageUrl: !!workshopForm.profile_picture
            ? workshopForm.profile_picture
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
          value={workshopForm.name}
          onChange={handleChange}
          defaultValue={workshopForm.name}
        />
        <FormInput
          name='address'
          lableText='주소'
          inputPlaceholder='주소를 입력해주세요'
          value={workshopForm.address}
          onChange={handleChange}
          defaultValue={workshopForm.address}
        />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='전화번호를 입력해주세요 (하이픈 제외)'
          value={removeHyphens(workshopForm.phone_number)}
          onChange={handleChange}
          maxLength={11}
          defaultValue={removeHyphens(workshopForm.phone_number)}
        />
        <Button
          size='small'
          type='submit'
          style='primary'
          disabled={isDisabled}
          className='absolute right-0 top-[-38px]'
        >
          완료
        </Button>
      </form>
    </div>
  );
};

export default WorkshopForm;
