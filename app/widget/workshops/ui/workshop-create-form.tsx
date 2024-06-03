'use client';

import FormInput from '@/app/shared/modules/FormInput';
import AddressInput from '@/app/shared/modules/address-input';

import { ChangeEvent, FormEvent } from 'react';
import Button from '@/app/shared/atoms/button/Button';
import useWorkshopCreate from '../api/useWorkshopCreate';
import { formDataToJSON } from '@/app/shared/lib/formDataToJSON';
import { WorkshopCreateRequest } from '../api/type';
import useWorkshopForm from '../lib/useWorkshopAddress';
import { formatPhoneNumber } from '@/app/shared/lib/formatPhoneNumber';
import { useRouter } from 'next/navigation';
import ImageUploader, {
  defaultImage,
} from '@/app/shared/modules/image-uploader/imageUploader';

const DEFAULT_WORKSHOP: defaultImage = {
  imageUrl: '/img/workshops-add-btn.png',
  imageAlt: '공방 등록 이미지',
  width: 143,
  height: 136,
  className: 'rounded-lg',
};

const WorkshopCreateForm = () => {
  const { workshopForm, setWorkshopForm } = useWorkshopForm();
  const { mutate } = useWorkshopCreate();
  const router = useRouter();

  const handleUpload = (url: string) => {
    setWorkshopForm((prev) => {
      return { ...prev, profile_picture: url };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    workshopForm.address &&
      formData.append(
        'address',
        workshopForm.address.roadAddr! + workshopForm.address.restAddr
      );

    workshopForm.profile_picture &&
      formData.append('profile_picture', workshopForm.profile_picture);

    workshopForm.phone_number &&
      formData.append(
        'phone_number',
        formatPhoneNumber(workshopForm.phone_number)
      );

    const body = formDataToJSON(formData);
    mutate(body as WorkshopCreateRequest, {
      onSuccess: () => router.push('/workshops/create/success'),
    });
  };

  const isDisabled = Object.values(workshopForm).length !== 4;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkshopForm((prev) => {
      return (
        prev && {
          ...prev,
          [e.target.name]: e.target.value,
        }
      );
    });
  };
  return (
    <div className='relative'>
      <ImageUploader
        onUpload={handleUpload}
        uploaded={workshopForm.profile_picture}
        defaultImage={DEFAULT_WORKSHOP}
      />
      <form className='flex flex-wrap gap-6' onSubmit={handleSubmit}>
        <FormInput
          name='name'
          lableText='공방 이름'
          inputPlaceholder='공방의 이름을 입력해주세요'
          value={workshopForm.name}
          onChange={handleChange}
        />
        <AddressInput />
        <FormInput
          name='phone_number'
          lableText='전화번호'
          inputPlaceholder='대표 전화번호를 입력해주세요 (하이픈 제외)'
          value={workshopForm.phone_number}
          onChange={handleChange}
          maxLength={11}
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
export default WorkshopCreateForm;
