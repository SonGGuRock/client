'use client';

import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import clsx from 'clsx';
import { useEffect } from 'react';

interface CheckBoxProps extends ClassNamesProps {
  isChecked?: boolean;
  isReadOnly?: boolean;
  onCheck?: () => void;
  style?: 'brown' | 'grey';
  name?: string;
}

const CheckBox = ({
  isChecked = false,
  isReadOnly = false,
  onCheck,
  style = 'brown',
  name,
  classNames,
}: CheckBoxProps) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[28px]',
    'h-[24px]',
    'rounded',
    {
      'bg-grey100': style === 'brown',
      'bg-todo-check-icon': style === 'brown',
      'checked:bg-brown': isChecked && style === 'brown',
      'checked:bg-checked-icon': isChecked && style === 'brown',
    },
    {
      'opacity-50': style === 'grey',
      'checked:bg-checked-icon': isChecked && style === 'grey',
      'bg-center': style === 'grey',
      border: style === 'grey',
      'border-white': style === 'grey',
      'bg-grey900': style === 'grey',
    }
  );

  useEffect(() => {
    console.log('✅', isChecked, isReadOnly ? 'Pending Component' : '진짜');
  }, [isChecked]);

  return (
    <input
      readOnly={isReadOnly}
      name={name}
      type='checkbox'
      className={`${checkBoxClasses} ${classNames}`}
      checked={isChecked}
      onChange={onCheck}
    />
  );
};

export default CheckBox;
