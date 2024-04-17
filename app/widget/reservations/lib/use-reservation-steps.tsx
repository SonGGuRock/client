'use client';

import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

export type Step<T> = {
  order: number;
  isMount: boolean;
  data: keyof T;
  component: ReactNode;
};

function useSteps<T>(initial: Step<T>[]) {
  const router = useRouter();
  const [steps, setSteps] = useState<Step<T>[]>(initial);

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
}

export default useSteps;
