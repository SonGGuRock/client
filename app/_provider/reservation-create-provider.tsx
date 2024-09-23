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
import { CraftCreateBody, CraftItemCreateBody } from '../entities/crafts/types';
import { WorkshopCrateBody } from '../entities/workshops/types';

export type SubmissionContext<
  T extends
    | ReservationCreateBody
    | CraftCreateBody
    | CraftItemCreateBody
    | WorkshopCrateBody
> = {
  form: Partial<T>;
  setForm: Dispatch<SetStateAction<Partial<T>>>;
};

export const ReservationCreateContext =
  createContext<SubmissionContext<ReservationCreateBody> | null>(null);

export function ReservationCreateProvider({
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
