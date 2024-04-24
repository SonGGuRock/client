import { PropsWithChildren } from 'react';

const SettingMenuSubtext = ({ children }: PropsWithChildren) => {
  return <span className='text-grey500 text-base mx-1'>{children}</span>;
};

export default SettingMenuSubtext;
