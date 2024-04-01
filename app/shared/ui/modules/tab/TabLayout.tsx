import { PropsWithChildren } from 'react';

const TabLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex gap-6 w-full border-b border-lightGrey px-4 pt-4'>
      {children}
    </div>
  );
};

export default TabLayout;
