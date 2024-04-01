import { PropsWithChildren } from 'react';

export const SettingMenuLabel = ({ children }: PropsWithChildren) => {
  return <label className='block text-sm text-grey400 mt-3'>{children}</label>;
};
