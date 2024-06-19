import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { ChangeEvent, PropsWithChildren, useState } from 'react';

interface SelectProps extends PropsWithChildren, ClassNamesProps {
  onChange?: (value: any) => void;
  defaultValue?: any;
}

export const Select = ({
  children,
  onChange,
  classNames,
  defaultValue,
}: SelectProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onChange && onChange(value);
  };

  return (
    <select
      className={`text-grey500 text-sm text-center ${classNames}`}
      onChange={handleSelectChange}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
};
