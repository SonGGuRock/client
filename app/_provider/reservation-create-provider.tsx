'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Reservation } from '../widget/reservations/lib/use-form-fill';

export type SubmissionContext<T> = {
  form: Partial<T>;
  setForm: Dispatch<SetStateAction<Partial<T>>>;
};

export const ReservationCreateContext =
  createContext<SubmissionContext<Reservation> | null>(null);

export default function ReservationCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<Reservation>>({});

  return (
    <ReservationCreateContext.Provider value={{ form, setForm }}>
      {children}
    </ReservationCreateContext.Provider>
  );
}
