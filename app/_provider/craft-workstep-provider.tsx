'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { WorkStepType } from '../shared/atoms/work-step-label';

export type CategoryContext<T> = {
  activeCategory: T | null;
  select: Dispatch<SetStateAction<T | null>>;
};

const CraftWorkstepContext = createContext<CategoryContext<
  WorkStepType['ko']
> | null>(null);

export default function CraftWorkstepProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeCategory, select] = useState<WorkStepType['ko'] | null>(null);

  return (
    <CraftWorkstepContext.Provider value={{ activeCategory, select }}>
      {children}
    </CraftWorkstepContext.Provider>
  );
}
