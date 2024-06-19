import { useEffect, useState } from 'react';

export type ToastContent = {
  text: string;
};

const useToast = () => {
  const [toast, setToast] = useState<ToastContent | null>();

  const toggleToast = (text: ToastContent) => {
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
