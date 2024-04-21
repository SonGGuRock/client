'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Reservation } from '@/app/pages/reservations/ui/reservations-create-page';
import { CraftItem } from '@/app/pages/crafts/items/craft-item-create.page';

export type Step<T> =
  | (T extends Reservation
      ? {
          order: number;
          isMount: boolean;
          data: keyof Reservation;
          component: ReactNode;
        }
      : never)
  | (T extends CraftItem
      ? {
          order: number;
          isMount: boolean;
          data: keyof CraftItem;
          component: ReactNode;
        }
      : never);

function useSteps(initial: (Step<Reservation> | Step<CraftItem>)[]) {
  const router = useRouter();
  const [steps, setSteps] =
    useState<(Step<Reservation> | Step<CraftItem>)[]>(initial);

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
      return;
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
