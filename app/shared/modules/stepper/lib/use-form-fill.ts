'use client';

import { SubmissionContext } from '@/app/_provider/reservation-create-provider';
import {
  CraftCreateBody,
  CraftItemCreateBody,
} from '@/app/entities/crafts/types';
import { ReservationCreateBody } from '@/app/entities/reservations/types';
import { Context, useContext } from 'react';

const useFormFill = <
  T extends ReservationCreateBody | CraftCreateBody | CraftItemCreateBody
>(
  context: Context<SubmissionContext<T> | null>
) => {
  const formStore = useContext(context);
  if (!formStore) {
    throw new Error('Form을 생성하는 Provider 내부에서 사용해야 합니다');
  }
  const { form, setForm } = formStore;
  const fill = (field: Partial<T>) => {
    const updated = form ? { ...form, ...field } : field;
    setForm(updated);
  };

  return { form, fill };
};

export default useFormFill;
