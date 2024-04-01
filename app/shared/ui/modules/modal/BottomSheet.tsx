import clsx from 'clsx';
import { ReactNode } from 'react';
import useModalContext from '../../../../hooks/useModalContext';

type BottomSheetProps = {
  toggle: () => void;
  children: ReactNode;
  className?: string;
};

const BottomSheet = ({ children, toggle, className }: BottomSheetProps) => {
  const bottomSheetClasses = clsx(
    'fixed',
    'inset-0',
    'bg-grey900',
    'bg-opacity-50',
    'z-100',
    'flex',
    'items-end'
  );

  return (
    <div className={bottomSheetClasses} onClick={toggle}>
      <div
        className={`bg-white rounded-lg w-full py-8 px-4 ${className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
