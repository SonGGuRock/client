'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import { Step } from '@/app/shared/modules/stepper/lib/use-steps';

import CloseButton from '@/app/shared/atoms/close-button';
import Header from '@/app/shared/modules/header';

import StepStudent from '@/app/widget/reservations/ui/step-student';
import StepClassTime from '@/app/widget/reservations/ui/step-class-time';
import StepWorkType from '@/app/widget/reservations/ui/step-work-type';
import Stepper from '@/app/shared/modules/stepper';
import {
  ReservationCreateBody,
  ReservationCreateResponse,
} from '@/app/entities/reservations/types';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import useCreate from '@/app/shared/api/useCreate';
import { DataResponse } from '@/app/shared/api/type';
import { useRouter } from 'next/navigation';

const ReservationsCreatePage = () => {
  const router = useRouter();
  const { form } = useFormFill(ReservationCreateContext);
  const { post } = useCreate<
    ReservationCreateBody,
    DataResponse<ReservationCreateResponse>
  >({
    path: `reservations`,
    revalidate: false,
    onSuccess: (data) => {
      router.push(`/reservations/create/success/${data.data.student_name}`);
    },
  });

  const handleCreate = () => {
    post(form as ReservationCreateBody);
  };
  const RESERVATION_STEPS: Step<ReservationCreateBody>[] = [
    {
      order: 0,
      isMount: true,
      data: ['student_id'] as (keyof ReservationCreateBody)[],
      component: <StepStudent context={ReservationCreateContext} />,
    },
    {
      order: 1,
      isMount: false,
      data: [
        'reservation_date',
        'classtime_id',
      ] as (keyof ReservationCreateBody)[],
      component: <StepClassTime />,
    },
    {
      order: 2,
      isMount: false,
      data: ['work_type_id'] as (keyof ReservationCreateBody)[],
      component: <StepWorkType />,
    },
  ];
  // const { handlePrev } = useSteps(RESERVATION_STEPS);

  return (
    <div className='pt-3 pb-10 bg-white'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Title size='medium'>수업 등록</Header.Title>
          </div>
          <CloseButton />
        </div>
      </Header>
      <Stepper steps={RESERVATION_STEPS} onCreate={handleCreate} />
    </div>
  );
};

export default ReservationsCreatePage;
