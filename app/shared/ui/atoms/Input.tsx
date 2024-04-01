type InputProps = {
  placeholder: string;
  classNames?: string;
};

const Input = ({ placeholder, classNames }: InputProps) => {
  return (
    <input
      className={`inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700 ${classNames}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
