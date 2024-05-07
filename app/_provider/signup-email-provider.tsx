'use client';

import { PropsWithChildren, createContext, useState } from 'react';

export type SignupEmail = {
  email: string;
  set: (email: string) => void;
};

export const SignupContext = createContext<SignupEmail | null>(null);

const SignupEmailProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<SignupEmail['email']>('');

  const set = (email: string) => {
    setEmail(email);
  };

  return (
    <SignupContext.Provider value={{ email, set }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupEmailProvider;
