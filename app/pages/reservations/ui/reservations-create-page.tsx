'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import useSteps, {
  Step,
} from '@/app/widget/reservations/lib/use-reservation-steps';

import Button from '@/app/shared/ui/atoms/button/Button';
import CloseButton from '@/app/shared/ui/atoms/close-button';
import Header from '@/app/shared/ui/modules/header';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import StepStudent from '@/app/widget/reservations/ui/step-student';
import StepClassTime from '@/app/widget/reservations/ui/step-class-time';
import StepWorkType from '@/app/widget/reservations/ui/step-work-type';
import useFormFill, {
  Reservation,
} from '@/app/widget/reservations/lib/use-form-fill';

const END_OF_STEP = 2;
const START_OF_STEP = 0;

const ReservationsCreatePage = () => {
  const reservationContext = useFormFill(ReservationCreateContext);

  useEffect(() => {
    console.log(reservationContext);
  }, [reservationContext]);

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
  const { steps, handleNext, handlePrev } = useSteps(RESERVATION_STEPS);

  const router = useRouter();
  const handleCreate = () => {
    // POST 요청 reservation?.data
    router.push('/reservations/create/success');
  };
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

      <div className='relative min-h-[600px] '>
        {steps.map((step) => step.isMount && step.component)}
        <div className='px-4 w-full absolute bottom-9 left-0'>
          {steps.map(
            (step, idx) =>
              step.isMount && (
                <Button
                  key={idx}
                  className='w-full'
                  size='large'
                  disabled={!reservationContext.form.hasOwnProperty(step.data)}
                  onClick={
                    step.order === END_OF_STEP ? handleCreate : handleNext
                  }
                >
                  {step.order === END_OF_STEP ? '등록' : '다음'}
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationsCreatePage;
