import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className='flex justify-between items-center'>{children}</div>;
};

export default Layout;
