'use client';

import { useState } from 'react';
import FormDatePicker from './FormDatePicker';
import useToggle from '@/app/shared/lib/useToggle';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface FormDateSelectProps {
  labelText: string;
}

const FormDateSelect = ({ labelText }: FormDateSelectProps) => {
  const { open, toggle } = useToggle();
  const [value, onChange] = useState<Value>(new Date());

  const year = value?.toLocaleString('ko-KR').split('.')[0];
  const month = value?.toLocaleString('ko-KR').split('.')[1];
  const day = value?.toLocaleString('ko-KR').split('.')[2];

  return (
    <div className='relative flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {labelText}
      </label>
      <div
        className='w-full text-base text-grey300 border-b border-grey100 pb-2 bg-chevron-down-icon bg-no-repeat bg-right'
        onClick={toggle}
      >{`${year}년 ${month}월 ${day}일`}</div>
      {open && (
        <FormDatePicker value={value} onChange={onChange} toggle={toggle} />
      )}
    </div>
  );
};

export default FormDateSelect;
