import { CraftStatus } from '@/app/entities/crafts/types';
import clsx from 'clsx';
import { useState } from 'react';

interface CraftStatusButtonsProps {
  onClick: (status: CraftStatus) => void;
  activeStatus?: CraftStatus;
  style?: 'background-primary' | 'item-primary';
}

const CraftStatusButtons = ({
  onClick,
  activeStatus,
  style = 'background-primary',
}: CraftStatusButtonsProps) => {
  const handleStauts = (status: CraftStatus) => {
    onClick(status);
  };

  const containerStyleClass = clsx({
    'bg-grey100': style === 'background-primary',
    'text-grey300': style === 'background-primary',
    'bg-white': style === 'item-primary',
    'text-grey600': style === 'background-primary',
  });

  return (
    <div
      className={`flex justify-between gap-2 w-full h-9 rounded-lg text-sm my-2 ${containerStyleClass}`}
    >
      <span
        onClick={() => {
          handleStauts('ongoing');
        }}
        className={`w-full text-sm  inline-flex font-semibold justify-center items-center py-2 border rounded-lg  bg-white ${
          activeStatus === 'ongoing' ? ' border-brown' : 'border-grey150'
        }
          `}
      >
        진행중
      </span>

      <span
        onClick={() => {
          handleStauts('completed');
        }}
        className={`w-full text-sm  inline-flex font-semibold justify-center items-center py-2 border rounded-lg  bg-white ${
          activeStatus === 'completed' ? ' border-brown' : 'border-grey150'
        }
            `}
      >
        완성
      </span>
      <span
        onClick={() => {
          handleStauts('keep');
        }}
        className={`w-full text-sm  inline-flex font-semibold justify-center items-center py-2 border rounded-lg  bg-white ${
          activeStatus === 'keep' ? ' border-brown' : 'border-grey150'
        }
            `}
      >
        보관
      </span>
    </div>
  );
};

export default CraftStatusButtons;
