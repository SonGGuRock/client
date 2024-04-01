import Switch from '@/app/shared/ui/atoms/Switch';
import { PropsWithChildren } from 'react';

interface SettingMenuActivationProps extends PropsWithChildren {
  className?: string;
}

export const SettingMenuActivation = ({
  children,
  className,
}: SettingMenuActivationProps) => {
  return (
    <li className={`flex justify-between ${className}`}>
      <div className='flex gap-1 items-center'>{children}</div>
      <Switch />
    </li>
  );
};
