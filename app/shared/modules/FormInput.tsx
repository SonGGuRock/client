import { ChangeEvent, PropsWithChildren, useState } from 'react';

interface FormInputProps extends PropsWithChildren {
  lableText: string;
  inputPlaceholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const FormInput = ({
  lableText,
  inputPlaceholder,
  children,
  value,
  disabled = false,
  onChange,
}: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        value={value}
        disabled={disabled}
        className='w-full text-base place-holder::text-grey300 text-grey900 border-b border-grey100 py-2'
        placeholder={inputPlaceholder}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
      />
      {children}
    </div>
  );
};

export default FormInput;
