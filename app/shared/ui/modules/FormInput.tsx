import { PropsWithChildren } from 'react';

interface FormInputProps extends PropsWithChildren {
  lableText: string;
  inputPlaceholder: string;
}

const FormInput = ({
  lableText,
  inputPlaceholder,
  children,
}: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        className='w-full text-base text-grey300 placeholder-grey300 border-b border-grey100 py-2'
        placeholder={inputPlaceholder}
      />
      {children}
    </div>
  );
};

export default FormInput;
