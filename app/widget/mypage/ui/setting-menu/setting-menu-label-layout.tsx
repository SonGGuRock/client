import { PropsWithChildren } from 'react';

interface SettingMenuInputProps extends PropsWithChildren {
  label: string;
}
export const SettingMenuLabelLayout = ({
  label,
  children,
}: SettingMenuInputProps) => {
  return (
    <li className='flex justify-between'>
      <span className=' inline-flex items-center'>{label}</span>
      <div>{children}</div>
    </li>
  );
};
