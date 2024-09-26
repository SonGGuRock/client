'use client';

import Title from '@/app/shared/atoms/Title';
import { useState } from 'react';
import useModal from '../../../shared/modules/modal/lib/useModal';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CraftsMoveReqeustBody,
  CraftStatus,
} from '@/app/entities/crafts/types';
import useUpdate from '@/app/shared/api/useUpdate';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import Toast from '@/app/shared/modules/toast/ui/toast';

type StatusMap = {
  id: number;
  status: CraftStatus;
  title: '진행중' | '완성' | '보관';
};

const STATUS_MAP: StatusMap[] = [
  {
    id: 0,
    status: 'ongoing',
    title: '진행중',
  },
  {
    id: 1,
    status: 'completed',
    title: '완성',
  },
  {
    id: 2,
    status: 'keep',
    title: '보관',
  },
];

interface CraftsEditModalContentProps {
  selectedCrafts: number[];
}

const CraftsEditModalContent = ({
  selectedCrafts,
}: CraftsEditModalContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const { toast, toggleToast } = useToast();
  const [activeStatus, setActiveStatus] = useState<StatusMap>(
    STATUS_MAP.find((item) => item.status === status)!
  );

  const { update } = useUpdate<CraftsMoveReqeustBody>({
    path: 'crafts',
    revalidate: true,
    revalidatePath: 'crafts',
    onSuccess: () => {
      toggleToast({
        text: `${selectedCrafts.length} 작품을 ${activeStatus.title}로 이동했어요`,
      });
      router.push('/crafts');
    },
  });

  const handleClickStatus = (statusId: number) => {
    const updated = STATUS_MAP.find((item) => item.id === statusId)!;
    setActiveStatus(updated);
    update({
      crafts: selectedCrafts,
      status: updated.status as CraftStatus,
    });
  };

  return (
    <div className='py-4'>
      <Title>작품 이동</Title>
      <div className='flex gap-2 mt-4 mb-4'>
        {STATUS_MAP.map((item) => (
          <button
            key={item.id}
            className={` w-full text-center font-bold text-xs py-[10px] px-9 rounded-lg ${
              activeStatus?.id === item.id
                ? 'bg-brown text-white'
                : ' border border-grey150 text-grey600'
            }`}
            onClick={() => handleClickStatus(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* {activeStatus?.status === '진행중' && (
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
      )} */}
      {toast && <Toast text={toast.text} />}
    </div>
  );
};

export default CraftsEditModalContent;
