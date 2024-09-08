'use client';

import { ReactNode, createContext, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';
import { CraftItemCreateBody } from '../entities/crafts/types';

export const CraftItemCreateContext =
  createContext<SubmissionContext<CraftItemCreateBody> | null>(null);

export default function CraftItemCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<CraftItemCreateBody>>({});

  return (
    <CraftItemCreateContext.Provider value={{ form, setForm }}>
      {children}
    </CraftItemCreateContext.Provider>
  );
}
