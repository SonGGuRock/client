'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { ReservationTemp } from '../pages/reservations/ui/reservations-create-page';

export type SubmissionContext<T> = {
  form: Partial<T>;
  setForm: Dispatch<SetStateAction<Partial<T>>>;
};

export const ReservationCreateContext =
  createContext<SubmissionContext<ReservationTemp> | null>(null);

export default function ReservationCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<ReservationTemp>>({});

  return (
    <ReservationCreateContext.Provider value={{ form, setForm }}>
      {children}
    </ReservationCreateContext.Provider>
  );
}
