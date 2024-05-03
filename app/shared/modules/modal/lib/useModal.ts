import { useContext } from 'react';
import { ModalContext } from '../../../../_provider/modal-provider';

const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw 'Context Not Provided';
  }
  return modalContext;
};

export default useModal;
