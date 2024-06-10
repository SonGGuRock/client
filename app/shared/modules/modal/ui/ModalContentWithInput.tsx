'use client';

import Button from '../../../atoms/button/Button';
import Title from '../../../atoms/Title';
import Input from '../../../atoms/Input';
import { FormEvent } from 'react';

type ModalContentWithInputProps = {
  title: string;
  placeholder?: string;
  onClose: () => void;
  onDone: (content: string) => void;
  defaultValue?: string;
};
const ModalContentWithInput = ({
  title,
  placeholder,
  onClose,
  onDone,
  defaultValue,
}: ModalContentWithInputProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get('content') as string;
    onDone(content);
    onClose();
  };

  return (
    <>
      <Title size='small'>{title}</Title>
      <form className='w-full mt-4' onSubmit={handleSubmit}>
        <Input
          placeholder={placeholder ?? ''}
          name='content'
          defaultValue={defaultValue}
        />
        <div className='mt-4 flex gap-4 justify-center '>
          <Button style='secondary' size='large' onClick={onClose}>
            취소
          </Button>
          <Button style='primary' size='large' type='submit'>
            확인
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalContentWithInput;
