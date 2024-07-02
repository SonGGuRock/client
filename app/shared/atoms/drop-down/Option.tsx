import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface OptionProps extends PropsWithChildren, ClassNamesProps {
  value: string;
}

export const Option = ({ children, value, classNames }: OptionProps) => {
  return (
    <option className={classNames} value={value}>
      {children}
    </option>
  );
};
