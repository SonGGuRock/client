'use client';

import { useRouter } from 'next/navigation';
import { Workshop } from '../api/type';
import useWorkshopActivate from '../api/useWorkshopActivate';
import WorkShopInfo from './workshop-info';

interface WorkshopListProps {
  workshopList: Workshop[];
  status: 'approval' | 'pending' | 'rejection';
}

const WorkshopList = ({ workshopList, status }: WorkshopListProps) => {
  const router = useRouter();
  const { mutate } = useWorkshopActivate();

  const handleClickWorkshop = (workshopId: number) => {
    mutate(workshopId, { onSuccess: () => router.push('/home') });
  };

  return (
    <div>
      {workshopList?.map((workshop) => (
        <div
          key={workshop.id}
          className={`relative ${status === 'pending' && 'opacity-50'}`}
        >
          {status === 'pending' && (
            <span className='px-3 py-1 bg-grey400 text-white rounded-full text-xs absolute top-3 right-3 z-10'>
              승인대기
            </span>
          )}
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
