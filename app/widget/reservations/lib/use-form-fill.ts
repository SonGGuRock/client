'use client';

import {
  ReservationCreateContext,
  SubmissionContext,
} from '@/app/_provider/reservation-create-provider';
import { Context, useContext, useState } from 'react';

type WORK_TYPE = 'throw' | 'hand';

export type Reservation = {
  student_id?: number;
  student_name?: string;
  reservation_date?: string;
  reservation_class_time_id?: string;
  work_type?: WORK_TYPE;
};

const useFormFill = <T>(context: Context<SubmissionContext<T> | null>) => {
  const formStore = useContext(context);
  if (!formStore) {
    throw new Error('Reservation Provider 내부에서 사용해야 합니다');
  }
  const { form, setForm } = formStore;
  const fill = (field: Partial<T>) => {
    const updated = form ? { ...form, ...field } : field;
    setForm(updated);
  };

  return { form, fill };
};

export default useFormFill;
