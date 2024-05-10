import { PropsWithChildren } from 'react';
import ClientQueryProvider from '../_provider/client-query-provider';

const RootLayout = ({ children }: PropsWithChildren) => {
  return <ClientQueryProvider>{children}</ClientQueryProvider>;
};

export default RootLayout;
