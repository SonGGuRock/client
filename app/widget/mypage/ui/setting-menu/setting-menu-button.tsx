import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

export const SettingMenuButton = ({ children, onClick, className }: Props) => {
  return (
    <li onClick={onClick} className={`list-none ${className}`}>
      {children}
    </li>
  );
};
