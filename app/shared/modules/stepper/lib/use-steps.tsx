'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReservationCreateBody } from '@/app/entities/reservations/types';
import { CraftItem } from '@/app/lib-temp/definition';
import {
  CraftCreateBody,
  CraftItemCreateBody,
} from '@/app/entities/crafts/types';

export type Step<T> =
  | (T extends ReservationCreateBody
      ? {
          order: number;
          isMount: boolean;
          data: (keyof ReservationCreateBody)[];
          component: ReactNode;
        }
      : never)
  | (T extends CraftCreateBody | CraftItemCreateBody
      ? {
          order: number;
          isMount: boolean;
          data: keyof CraftCreateBody | CraftItemCreateBody;
          component: ReactNode;
        }
      : never);

function useSteps(
  initial: (
    | Step<ReservationCreateBody>
    | Step<CraftCreateBody | CraftItemCreateBody>
  )[]
) {
  const router = useRouter();
  const [steps, setSteps] =
    useState<
      (
        | Step<ReservationCreateBody>
        | Step<CraftCreateBody | CraftItemCreateBody>
      )[]
    >(initial);

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
