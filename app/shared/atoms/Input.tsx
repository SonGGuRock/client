import { ChangeEvent } from 'react';

type InputProps = {
  placeholder: string;
  classNames?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  classNames,
  value,
  name,
  onChange,
}: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={`inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700 ${classNames}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
