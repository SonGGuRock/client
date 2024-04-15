'use client';

import { ReactNode, useState } from 'react';
import { Reservation } from './use-reservation-create';
import { useRouter } from 'next/navigation';
import StepStudent from '../ui/step-student';
import StepClassTime from '../ui/step-class-time';
import StepWorkType from '../ui/step-work-type';

type Step = {
  order: number;
  isMount: boolean;
  data: keyof Reservation;
  component: ReactNode;
};

const useReservationSteps = () => {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>([
    {
      order: 0,
      isMount: true,
      data: 'student_name',
      component: <StepStudent />,
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
  ]);

  const handleNext = () => {
    const prevOrder = steps.find((step) => step.isMount)!.order;
    if (prevOrder === 2) return;
    const nowOrder = prevOrder + 1;
    const newSteps = steps.map((step) => {
      if (step.order === prevOrder || step.order === nowOrder) {
        return { ...step, isMount: !step.isMount };
      }
      return step;
    });

    setSteps(newSteps);
  };

  const handlePrev = () => {
    const prevOrder = steps.find((step) => step.isMount)!.order;
    if (prevOrder === 0) {
      router.back();
    } else {
      const nowOrder = prevOrder - 1;
      const newSteps = steps.map((step) => {
        if (step.order === prevOrder || step.order === nowOrder) {
          return { ...step, isMount: !step.isMount };
        }
        return step;
      });

      setSteps(newSteps);
    }
  };

  return { steps, handleNext, handlePrev };
};

export default useReservationSteps;
