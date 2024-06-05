'use client';

import { useEffect, useState } from 'react';
import FormDatePicker from './FormDatePicker';
import useToggle from '@/app/shared/lib/useToggle';
import { formatDate } from '../lib/formatDate';
import formatCalendarDate from '../lib/formatCalendarDate';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface FormDateInputProps {
  name: string;
  type?: string;
  required?: boolean;
  labelText: string;
  onSelect: (value: { [key: string]: string }) => void;
}

const FormDateInput = ({
  labelText,
  name,
  required,
  onSelect,
  type = 'text',
}: FormDateInputProps) => {
  const { open, toggle } = useToggle();
  const [value, setValue] = useState<Value>(new Date());

  const formattedValue = formatCalendarDate(value);

  const handleChange = (value: Value) => {
    setValue(value);
    onSelect({ [name]: formatCalendarDate(value) });
  };

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
        value={formattedValue}
        readOnly
      />
      {open && (
        <FormDatePicker value={value} onChange={handleChange} toggle={toggle} />
      )}
    </div>
  );
};

export default FormDateInput;
