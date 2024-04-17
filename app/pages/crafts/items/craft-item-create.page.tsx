'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import Header from '@/app/shared/ui/modules/header';
import useSteps, {
  Step,
} from '@/app/widget/reservations/lib/use-reservation-steps';
import StepStudent from '@/app/widget/reservations/ui/step-student';
import { useContext } from 'react';

export type CraftItem = {
  craft_id: number;
  reservation_id: number;
  student_id: number;
  student_name: string;
  craft_item_picture: string;
  craft_item_work_step: string;
  content: string;
};

const context = useContext(ReservationCreateContext);

const CRAFT_STEPS: Step<CraftItem>[] = [
  {
    order: 0,
    isMount: true,
    data: 'student_id',
    component: <StepStudent {...context} />,
  },
  {
    order: 1,
    isMount: false,
    data: 'craft_id',
    component: <div>hi</div>,
  },
];

const CraftItemCreatePage = () => {
  const { steps, handleNext, handlePrev } = useSteps(CRAFT_STEPS);

  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back onClick={handlePrev} />
            <Header.Title size='medium'>수업 등록</Header.Title>
          </div>
          <Header.Close />
        </div>
      </Header>
    </div>
  );
};

export default CraftItemCreatePage;
