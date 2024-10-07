import AuthEmailProvider from '@/app/_provider/auth-email-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <AuthEmailProvider>{children}</AuthEmailProvider>;
};

export default Layout;
