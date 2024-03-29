import { useContext } from 'react';
import { ModalContext } from '../provider/modal-provider';

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw 'Context Not Provided';
  }
  return context;
};

export default useModalContext;
