'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import useModalContext from '../../../../hooks/useModalContext';

type BottomSheetProps = {
  children: ReactNode;
  className?: string;
};

const Modal = ({ children, className }: BottomSheetProps) => {
  const { toggle } = useModalContext();

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
    <div className={ModalClasses} onClick={toggle}>
      <div
        className={`bg-white rounded-lg w-full py-4 px-4 ${className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
