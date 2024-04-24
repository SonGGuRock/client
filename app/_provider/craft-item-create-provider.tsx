'use client';

import { ReactNode, createContext, useState } from 'react';
import { CraftItem } from '../pages/crafts/items/craft-item-create.page';
import { SubmissionContext } from './reservation-create-provider';

export const CraftItemCreateContext =
  createContext<SubmissionContext<CraftItem> | null>(null);

export default function CraftItemCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<Partial<CraftItem>>({});

  return (
    <CraftItemCreateContext.Provider value={{ form, setForm }}>
      {children}
    </CraftItemCreateContext.Provider>
  );
}
