import { useState } from 'react';

const usePopup = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return { open, toggle };
};

export default usePopup;
