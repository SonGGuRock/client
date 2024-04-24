'use client';

import Button from '../../../shared/atoms/button/Button';
import Title from '../../../shared/atoms/Title';
import Input from '../../../shared/atoms/Input';

type ModalContentWithInputProps = {
  title: string;
  placeholder?: string;
  onClose: () => void;
  onDone: () => void;
};
const ModalContentWithInput = ({
  title,
  placeholder,
  onClose,
  onDone,
}: ModalContentWithInputProps) => {
  return (
    <>
      <Title size='small'>{title}</Title>
      <form className='w-full mt-4'>
        <Input placeholder={placeholder ?? ''} />
        <div className='mt-4 flex gap-4 justify-center '>
          <Button type='secodnary' size='large' onClick={onClose}>
            취소
          </Button>
          <Button
            type='primary'
            size='large'
            onClick={() => {
              onDone();
              onClose();
            }}
          >
            확인
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalContentWithInput;
