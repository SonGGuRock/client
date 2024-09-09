'use client';

import { ReactNode, createContext, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';
import {
  CraftCreateBody,
  CraftCreateBodyAndTitle,
} from '../entities/crafts/types';

export const CraftCreateContext =
  createContext<SubmissionContext<CraftCreateBodyAndTitle> | null>(null);

export default function CraftCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<CraftCreateBodyAndTitle>>({});

  return (
    <CraftCreateContext.Provider value={{ form, setForm }}>
      {children}
    </CraftCreateContext.Provider>
  );
}
