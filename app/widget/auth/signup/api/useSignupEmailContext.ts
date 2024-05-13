'use client';

import { useContext } from 'react';
import { EmailContext } from '@/app/_provider/email-provider';

const useEmailContext = () => {
  const emailContext = useContext(EmailContext);

  if (!emailContext) {
    throw 'Context Not Provided';
  }
  return emailContext;
};

export default useEmailContext;
