'use client';

import { ReactNode, createContext, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';
import { WorkshopCrateBody } from '../entities/workshops/types';

export const WorkshopFormContext =
  createContext<SubmissionContext<WorkshopCrateBody> | null>(null);

export default function WorkshopCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<WorkshopCrateBody>>({});

  return (
    <WorkshopFormContext.Provider value={{ form, setForm }}>
      {children}
    </WorkshopFormContext.Provider>
  );
}
