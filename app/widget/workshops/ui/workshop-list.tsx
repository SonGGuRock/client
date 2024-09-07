'use client';

import { useRouter } from 'next/navigation';
import { Workshop } from '../api/type';
import useWorkshopActivate from '../api/useWorkshopActivate';
import WorkShopInfo from './workshop-info';

export interface WorkshopListProps {
  workshopList: Workshop[];
  status: 'approval' | 'pending' | 'rejection';
}

const WorkshopList = ({ workshopList, status }: WorkshopListProps) => {
  const router = useRouter();
  const { mutate } = useWorkshopActivate();

  const handleClickWorkshop = (workshopId: number) => {
    console.log('click');
    mutate(workshopId, { onSuccess: () => router.push('/home') });
  };

  return (
    <div className='relative'>
      {workshopList?.map((workshop) => (
        <div
          key={workshop.id}
          className={`relative ${status === 'pending' && 'opacity-50'}
          }`}
        >
          {status === 'pending' && (
            <span className='px-3 py-1 bg-grey400 text-white rounded-full text-xs absolute top-3 right-3 z-10'>
              승인대기
            </span>
          )}
          {status === 'rejection' && (
            <span className='px-3 py-1 bg-grey800 text-white rounded-full text-xs absolute top-3 right-3 z-10'>
              승인거절
            </span>
          )}
          {/* <div className='absolute inset-0 opacity-60 z-10 rounded-lg'></div> */}

          <WorkShopInfo
            workshop={workshop}
            onClick={
              status === 'approval'
                ? () => handleClickWorkshop(workshop.id)
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

export default WorkshopList;
