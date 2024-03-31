import { useContext } from 'react';
import { ModalContext } from '../_provider/modal-provider';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw 'Context Not Provided';
  }
  return context;
};

export default useModalContext;
