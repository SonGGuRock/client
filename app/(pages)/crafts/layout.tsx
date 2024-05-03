import CraftWorkstepProvider from '@/app/_provider/craft-workstep-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <CraftWorkstepProvider>{children}</CraftWorkstepProvider>;
};

export default Layout;
