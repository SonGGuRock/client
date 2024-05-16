'use client';

import { Workshop } from '../api/type';
import WorkShopInfo from './workshop-info';

interface WorkshopListProps {
  workshopList: Workshop[];
}

const WorkshopList = ({ workshopList }: WorkshopListProps) => {
  return (
    <div>
      {workshopList?.map((workshop) => (
        <WorkShopInfo key={workshop.id} workshop={workshop} />
      ))}
    </div>
  );
};

export default WorkshopList;
