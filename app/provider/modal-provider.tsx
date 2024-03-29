'use client';

import { ReactNode, createContext } from 'react';
import useToggle from '../hooks/useToggle';

type ModalContext = {
  open: boolean;
  toggle: () => void;
};

export const ModalContext = createContext<ModalContext | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const toggle = useToggle();

  return (
    <ModalContext.Provider value={toggle}>{children}</ModalContext.Provider>
  );
}
