import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface SelectProps extends PropsWithChildren, ClassNamesProps {}

export const Select = ({ children, classNames }: SelectProps) => {
  return (
    <select className={`text-grey500 text-sm text-right ${classNames}`}>
      {children}
    </select>
  );
};
