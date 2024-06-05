'use client';

import useFileUpload from '@/app/shared/api/useFileUpload';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef } from 'react';

export type defaultImage = {
  imageUrl: string;
  imageAlt: string;
  width: number;
  height: number;
  className?: string;
};

interface ImageUploaderProps {
  onUpload: (imageUrl: string) => void;
  uploaded?: string;
  defaultImage: defaultImage;
}

const ImageUploader = ({
  onUpload,
  uploaded,
  defaultImage,
}: ImageUploaderProps) => {
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
      <div
        className={`w-full flex justify-center h-[${defaultImage.height}px] mb-6`}
      >
        {!data && !uploaded && (
          <Image
            src={defaultImage.imageUrl}
            // src='/img/workshops-add-btn.png'
            alt={defaultImage.imageAlt}
            width={defaultImage.width}
            // width={343}
            height={defaultImage.height}
            // height={136}
            className={defaultImage.className}
            onClick={handleUploadClick}
          />
        )}
        {uploaded && (
          <Image
            src={uploaded}
            alt={defaultImage.imageAlt}
            width={defaultImage.width}
            height={defaultImage.height}
            className={`w-full h-[${defaultImage.height}px] ${defaultImage.className}`}
            // object-cover
          />
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
