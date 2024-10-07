import WorkshopCreateProvider from '@/app/_provider/workshop-create-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <WorkshopCreateProvider>{children}</WorkshopCreateProvider>;
};

export default Layout;
