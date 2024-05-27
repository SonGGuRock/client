import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export const SettingMenuButton = ({ children, onClick }: Props) => {
  return <li onClick={onClick}>{children}</li>;
};
