import { ChangeEvent, PropsWithChildren } from 'react';

interface FormInputProps extends PropsWithChildren {
  lableText: string;
  inputPlaceholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  lableText,
  inputPlaceholder,
  value,
  onChange,
  children,
}: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        className='w-full text-base place-holder::text-grey300 border-b border-grey100 py-2 '
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FormInput;
