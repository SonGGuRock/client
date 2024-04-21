import ModalLayout from './ModalLayout';
import useModal from '../lib/useModal';
import { createPortal } from 'react-dom';

const PortalModal = () => {
  const { isOpen } = useModal();
  if (!isOpen) return null;

  return createPortal(<ModalLayout />, document.body);
};

export default PortalModal;
