'use client';

import Modal from '../../Modal';
import Button from '../atoms/button/Button';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

type BottomSheetWithInputProps = {
  title: string;
  placeholder?: string;
  onClose: () => void;
  onDone: () => void;
};
const BottomSheetWithInput = ({
  title,
  placeholder,
  onClose,
  onDone,
}: BottomSheetWithInputProps) => {
  return (
    <Modal toggle={onClose}>
      <Title title={title} />
      <form className='w-full mt-4'>
        <Input placeholder={placeholder ?? ''} />
        <div className='mt-4 flex gap-4 justify-center '>
          <Button
            type='secodnary'
            size='medium'
            text='취소'
            onClick={onClose}
          />
          <Button
            type='primary'
            size='medium'
            text='확인'
            onClick={() => {
              onDone();
              onClose();
            }}
          />
        </div>
      </form>
    </Modal>
  );
};

export default BottomSheetWithInput;
