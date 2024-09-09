'use client';

import useFileUpload from '@/app/shared/api/useFileUpload';
import { ChangeEvent, useEffect, useRef } from 'react';

interface ImageUploaderWithTextProps {
  onUpload: (imageUrl: string) => void;
  triggerText: string;
}

const ImageUploaderWithText = ({
  onUpload,
  triggerText,
}: ImageUploaderWithTextProps) => {
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
      <form onSubmit={handleSubmit}>
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
      <div onClick={handleUploadClick}>{triggerText}</div>
    </div>
  );
};

export default ImageUploaderWithText;
