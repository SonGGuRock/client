'use client';

import { ReactNode, createContext, useState } from 'react';
import useToggle from '../shared/lib/useToggle';

type ModalContext = {
  isOpen: boolean;
  modalContent: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContext | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const { open: isOpen, onOpen, onClose } = useToggle();
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    onOpen();
    setModalContent(content);
  };

  const closeModal = () => {
    onClose();
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
