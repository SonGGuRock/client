type InputProps = {
  placeholder: string;
};

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className='inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700'
      placeholder={placeholder}
    />
  );
};

export default Input;
