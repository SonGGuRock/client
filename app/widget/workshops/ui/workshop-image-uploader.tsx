'use client';

import useFileUpload from '@/app/shared/api/useFileUpload';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef } from 'react';

interface WorkshopImageUploaderProps {
  onUpload: (imageUrl: string) => void;
  uploaded?: string;
}

const WorkshopImageUploader = ({
  onUpload,
  uploaded,
}: WorkshopImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const { mutate, data, isSuccess } = useFileUpload();

  useEffect(() => {
    isSuccess && onUpload(data.data.file_name);
  }, [isSuccess, data]);

  const handleUploadClick = () => {
    fileInputRef.current!.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      submitButtonRef.current!.click();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(formData);
  };

  return (
    <div>
      <form className='pt-2' onSubmit={handleSubmit}>
        <input
          type='file'
          name='image'
          className='hidden'
          ref={fileInputRef}
          onChange={handleChange}
        />
        <button type='submit' ref={submitButtonRef} className='hidden'>
          Upload
        </button>
      </form>
      <div className='w-full h-[136px] mb-6'>
        {!data && !uploaded && (
          <Image
            src='/img/workshops-add-btn.png'
            alt='공방 등록 이미지'
            width={343}
            height={136}
            className='w-full'
            onClick={handleUploadClick}
          />
        )}
        {uploaded && (
          <Image
            src={uploaded}
            alt='공방 썸네일'
            width={343}
            height={136}
            className='w-full object-cover h-[136px] rounded-lg'
          />
        )}
      </div>
    </div>
  );
};

export default WorkshopImageUploader;
