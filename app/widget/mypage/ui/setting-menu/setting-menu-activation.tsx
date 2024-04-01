import Switch from '@/app/shared/ui/atoms/Switch';
import { PropsWithChildren } from 'react';

export const SettingMenuActivation = ({ children }: PropsWithChildren) => {
  return (
    <li className='flex justify-between'>
      {children}
      <Switch />
    </li>
  );
};
