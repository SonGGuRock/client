interface FormInputProps {
  lableText: string;
  inputPlaceholder: string;
}

const FormInput = ({ lableText, inputPlaceholder }: FormInputProps) => {
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>
        {lableText}
      </label>
      <input
        className='w-full text-base text-grey300 border-b border-grey100 pb-2'
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

export default FormInput;
