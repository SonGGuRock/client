import SignupEmailProvider from '@/app/_provider/signup-email-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <SignupEmailProvider>{children}</SignupEmailProvider>;
};

export default Layout;
