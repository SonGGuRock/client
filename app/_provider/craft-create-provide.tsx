'use client';

import { ReactNode, createContext, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';
import { CraftCreateBody, CraftItemCreateBody } from '../entities/crafts/types';

export const CraftCreateContext =
  createContext<SubmissionContext<CraftCreateBody> | null>(null);

export default function CraftCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<CraftCreateBody>>({});

  return (
    <CraftCreateContext.Provider value={{ form, setForm }}>
      {children}
    </CraftCreateContext.Provider>
  );
}
