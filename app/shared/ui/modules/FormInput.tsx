import { PropsWithChildren } from 'react';

interface FormInputProps extends PropsWithChildren {
  lableText: string;
  inputPlaceholder?: string;
  disabled?: boolean;
  value?: string;
}

const FormInput = ({
  lableText,
  inputPlaceholder,
  disabled = false,
  value,
  children,
}: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        value={value}
        disabled={disabled}
        className='w-full text-base placeholder::text-grey300 border-b border-grey100 py-2'
        placeholder={inputPlaceholder}
      />
      {children}
    </div>
  );
};

export default FormInput;
