'use client';

import clsx from 'clsx';
import { MouseEvent, ReactNode } from 'react';
import useModal from '../lib/useModal';

type BottomSheetProps = {
  children?: ReactNode;
  className?: string;
};

const ModalLayout = ({ className }: BottomSheetProps) => {
  const { modalContent, closeModal } = useModal();

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const ModalClasses = clsx(
    'fixed',
    'inset-0',
    'bg-grey900',
    'bg-opacity-50',
    'z-100',
    'flex',
    'items-end'
  );

  return (
    <div className={ModalClasses} onClick={handleOutsideClick}>
      <div className={`bg-white rounded-lg w-full py-4 px-4 ${className}`}>
        {modalContent}
      </div>
    </div>
  );
};

export default ModalLayout;
