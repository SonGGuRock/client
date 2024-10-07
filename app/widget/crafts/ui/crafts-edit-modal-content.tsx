'use client';

import Title from '@/app/shared/atoms/Title';
import { useState } from 'react';
import { WORK_STEP, WorkStepType } from '@/app/shared/atoms/work-step-label';
import useModal from '../../../shared/modules/modal/lib/useModal';

type Status = {
  id: number;
  status: '진행중' | '완성' | '보관';
};

const STATUS: Status[] = [
  {
    id: 0,
    status: '진행중',
  },
  {
    id: 1,
    status: '완성',
  },
  {
    id: 2,
    status: '보관',
  },
];

interface CraftsEditModalContentProps {
  onClick: (workstep: WorkStepType['ko']) => void;
}

const CraftsEditModalContent = ({ onClick }: CraftsEditModalContentProps) => {
  const { closeModal } = useModal();
  const [activeStatus, setActiveStatus] = useState<Status>();

  const handleClickStatus = (status: Status) => {
    setActiveStatus(status);
  };

  const handleClickWorkstep = (workstep: WorkStepType['ko']) => {
    closeModal();
    onClick(workstep);
  };
  return (
    <div className='py-4'>
      <Title>작품 이동</Title>
      <div className='flex gap-2 mt-4 mb-4'>
        {STATUS.map((item, idx) => (
          <button
            key={item.id}
            className={` w-full text-center font-bold text-xs py-[10px] px-9 rounded-lg ${
              activeStatus?.id === item.id
                ? 'bg-brown text-white'
                : ' border border-grey150 text-grey600'
            }`}
            onClick={() =>
              handleClickStatus({ id: item.id, status: item.status })
            }
          >
            {item.status}
          </button>
        ))}
      </div>
      {activeStatus?.status === '진행중' && (
        <div className='w-full flex gap-2'>
          {WORK_STEP.map((step, idx) => (
            <span
              key={idx}
              onClick={() => {
                handleClickWorkstep(step.ko);
              }}
              className=' border border-grey150 text-grey600 text-xs py-[6px] px-3 rounded-lg'
            >
              {step.ko}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CraftsEditModalContent;
