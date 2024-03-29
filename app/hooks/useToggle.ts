import { useState } from 'react';

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return { open, toggle };
};

export default useToggle;
