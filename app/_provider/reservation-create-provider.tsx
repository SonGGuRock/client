'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { ReservationCreateBody } from '../entities/reservations/types';

export type SubmissionContext<T> = {
  form: Partial<T>;
  setForm: Dispatch<SetStateAction<Partial<T>>>;
};

export const ReservationCreateContext =
  createContext<SubmissionContext<ReservationCreateBody> | null>(null);

export default function ReservationCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<ReservationCreateBody>>({});

  useEffect(() => {
    console.log('🥹', form);
  }, [form]);
  return (
    <ReservationCreateContext.Provider value={{ form, setForm }}>
      {children}
    </ReservationCreateContext.Provider>
  );
}
