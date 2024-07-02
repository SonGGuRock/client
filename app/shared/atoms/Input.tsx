import { ChangeEvent } from 'react';

type InputProps = {
  placeholder: string;
  classNames?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  classNames,
  value,
  name,
  defaultValue,
  onChange,
}: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`inline-block w-full bg-grey50 px-2 py-1 h-10 text-sm rounded-lg text-grey700 ${classNames}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
