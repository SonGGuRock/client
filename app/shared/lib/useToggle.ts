import { useState } from 'react';

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return { open, toggle, onOpen, onClose };
};

export default useToggle;
