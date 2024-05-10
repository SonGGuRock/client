'use client';

import { useState } from 'react';
import FormDatePicker from './FormDatePicker';
import useToggle from '@/app/shared/lib/useToggle';
import { formatDate } from '../lib/formatDate';

// type ValuePiece = Date | null;

// export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface FormDateInputProps {
  name?: string;
  type?: string;
  required?: boolean;
  labelText: string;
}

const FormDateInput = ({
  labelText,
  name,
  required,
  type = 'text',
}: FormDateInputProps) => {
  const { open, toggle } = useToggle();
  const [value, onChange] = useState<Date>(new Date());

  return (
    <div className='relative flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {labelText}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className='appear w-full text-base text-grey900 border-b border-grey100 pb-2 bg-chevron-down-icon bg-no-repeat bg-right'
        onClick={toggle}
        value={formatDate(value)}
      />
      {/* TODO: 바로 입력이 편의성이 높음 */}
      {open && (
        <FormDatePicker value={value} onChange={onChange} toggle={toggle} />
      )}
    </div>
  );
};

export default FormDateInput;
