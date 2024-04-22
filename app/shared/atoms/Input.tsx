import { ChangeEvent } from 'react';

type InputProps = {
  placeholder: string;
  classNames?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, classNames, value, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700 ${classNames}`}
      placeholder={placeholder}
    />
  );
};

export default Input;