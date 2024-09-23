'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';
import { SubmissionContext } from './reservation-create-provider';
import { CraftItemCreateBody } from '../entities/crafts/types';

export const CraftItemMutateContext =
  createContext<SubmissionContext<CraftItemCreateBody> | null>(null);

export default function CraftItemMutateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<CraftItemCreateBody>>({});
  useEffect(() => {
    console.log('🥹 CraftItemCreateBody', form);
  }, [form]);
  return (
    <CraftItemMutateContext.Provider value={{ form, setForm }}>
      {children}
    </CraftItemMutateContext.Provider>
  );
}
