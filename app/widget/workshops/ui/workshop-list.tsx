'use client';

import { useRouter } from 'next/navigation';
import { Workshop } from '../api/type';
import useWorkshopActivate from '../api/useWorkshopActivate';
import WorkShopInfo from './workshop-info';

interface WorkshopListProps {
  workshopList: Workshop[];
}

const WorkshopList = ({ workshopList }: WorkshopListProps) => {
  const router = useRouter();
  const { mutate } = useWorkshopActivate();

  const handleClickWorkshop = (workshopId: number) => {
    mutate(workshopId, { onSuccess: () => router.push('/home') });
  };

  return (
    <div>
      {workshopList?.map((workshop) => (
        <WorkShopInfo
          key={workshop.id}
          workshop={workshop}
          onClick={() => handleClickWorkshop(workshop.id)}
        />
      ))}
    </div>
  );
};

export default WorkshopList;
