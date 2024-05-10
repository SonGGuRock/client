import Switch from '@/app/shared/atoms/Switch';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface SettingMenuActivationProps
  extends PropsWithChildren,
    ClassNamesProps {}

export const SettingMenuActivation = ({
  children,
  classNames,
}: SettingMenuActivationProps) => {
  return (
    <li className={`flex justify-between ${classNames}`}>
      <div className='flex gap-1 items-center'>{children}</div>
      <Switch />
    </li>
  );
};
