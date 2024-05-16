'use client';

import { ReactNode, createContext, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';

type WorkshopAddress = {
  roadAddr?: string;
  restAddr?: string;
};

type WorkshopForm = {
  name: string;
  profile_picture: string;
  address: WorkshopAddress;
  phone_number: string;
};

export const WorkshopFormContext =
  createContext<SubmissionContext<WorkshopForm> | null>(null);

export default function WorkshopCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<WorkshopForm>>({});

  return (
    <WorkshopFormContext.Provider value={{ form, setForm }}>
      {children}
    </WorkshopFormContext.Provider>
  );
}
