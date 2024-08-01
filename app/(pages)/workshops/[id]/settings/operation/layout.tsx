import WorkshopOperationProvider from '@/app/_provider/workshop-operation-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <WorkshopOperationProvider>{children}</WorkshopOperationProvider>;
};

export default Layout;
