import { ChangeEvent, PropsWithChildren } from 'react';

interface FormInputProps extends PropsWithChildren {
  lableText: string;
  name?: string;
  type?: string;
  inputPlaceholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const FormInput = ({
  lableText,
  name,
  type = 'text',
  inputPlaceholder,
  children,
  value,
  disabled = false,
  maxLength,
  onChange,
  required,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className='w-full text-base place-holder::text-grey300 text-grey900 border-b border-grey100 py-2'
        placeholder={inputPlaceholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {children}
    </div>
  );
};

export default FormInput;
