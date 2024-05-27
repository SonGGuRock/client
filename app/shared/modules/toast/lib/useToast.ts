import { useEffect, useState } from 'react';

export type Toast = {
  text: string;
};

const useToast = () => {
  const [toast, setToast] = useState<Toast | null>();

  const toggleToast = (text: Toast) => {
    setToast(text);
  };

  useEffect(() => {
    if (!toast) return;
    setTimeout(() => {
      setToast(null);
    }, 1500);
  }, [toast]);

  return { toast, toggleToast };
};

export default useToast;
