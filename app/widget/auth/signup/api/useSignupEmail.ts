'use client';

import { useContext } from 'react';
import { SignupContext } from '@/app/_provider/signup-email-provider';

const useSignupEmail = () => {
  const emailContext = useContext(SignupContext);

  if (!emailContext) {
    throw 'Context Not Provided';
  }
  return emailContext;
};

export default useSignupEmail;
