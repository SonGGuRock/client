import { PropsWithChildren } from 'react';

interface OptionProps extends PropsWithChildren {
  value: string;
}

export const Option = ({ children, value }: OptionProps) => {
  return <option value={value}>{children}</option>;
};
