import { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
