import { PropsWithChildren } from 'react';

const SettingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='border-t border-grey100 p-4'>
      <ul className='grid grid-col-1 gap-6'>{children}</ul>
    </div>
  );
};

export default SettingLayout;
