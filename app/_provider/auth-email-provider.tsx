'use client';

import { PropsWithChildren, createContext, useState } from 'react';

export type Email = {
  email: string;
  set: (email: string) => void;
};

export const EmailContext = createContext<Email | null>(null);

const AuthEmailProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<Email['email']>('');

  const set = (email: string) => {
    setEmail(email);
  };

  return (
    <EmailContext.Provider value={{ email, set }}>
      {children}
    </EmailContext.Provider>
  );
};

export default AuthEmailProvider;
