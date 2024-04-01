import { PropsWithChildren } from 'react';

interface SettingLayoutProps extends PropsWithChildren {
  className?: string;
}

const SettingLayout = ({ children, className }: SettingLayoutProps) => {
  return (
    <div className={`border-t border-grey100 px-4 first:border-0 ${className}`}>
      <ul className='grid grid-col-1 gap-6'>{children}</ul>
    </div>
  );
};

export default SettingLayout;
