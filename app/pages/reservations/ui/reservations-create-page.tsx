'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import useSteps, { Step } from '@/app/widget/reservations/lib/use-steps';

import CloseButton from '@/app/shared/ui/atoms/close-button';
import Header from '@/app/shared/ui/modules/header';

import StepStudent from '@/app/widget/reservations/ui/step-student';
import StepClassTime from '@/app/widget/reservations/ui/step-class-time';
import StepWorkType from '@/app/widget/reservations/ui/step-work-type';
import useFormFill from '@/app/widget/reservations/lib/use-form-fill';
import Stepper from '@/app/shared/ui/modules/stepper';

type WORK_TYPE = 'throw' | 'hand';

export type Reservation = {
  student_id?: number;
  student_name?: string;
  reservation_date?: string;
  reservation_class_time_id?: string;
  work_type?: WORK_TYPE;
};

const ReservationsCreatePage = () => {
  const { form } = useFormFill(ReservationCreateContext);

  const RESERVATION_STEPS: Step<Reservation>[] = [
    {
      order: 0,
      isMount: true,
      data: 'student_name',
      component: <StepStudent context={ReservationCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: 'reservation_date',
      component: <StepClassTime />,
    },
    {
      order: 2,
      isMount: false,
      data: 'work_type',
      component: <StepWorkType />,
    },
  ];
  const { handlePrev } = useSteps(RESERVATION_STEPS);

  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back onClick={handlePrev} />
            <Header.Title size='medium'>수업 등록</Header.Title>
          </div>
          <CloseButton />
        </div>
      </Header>
      <Stepper steps={RESERVATION_STEPS} form={form} />
    </div>
  );
};

export default ReservationsCreatePage;
