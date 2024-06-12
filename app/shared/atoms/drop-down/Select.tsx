import { StudentSearchParams } from '@/app/pages/students/ui/students-list-page';
import { ChangeEvent, PropsWithChildren, useState } from 'react';

interface SelectProps extends PropsWithChildren {
  onSort: (newParams: Partial<StudentSearchParams>) => void;
}

export const Select = ({ children, onSort }: SelectProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onSort({ sort: value as 'count' | 'name' | 'register_date' });
  };

  return (
    <select
      className='text-grey500 text-sm text-right'
      onChange={handleSelectChange}
    >
      {children}
    </select>
  );
};
