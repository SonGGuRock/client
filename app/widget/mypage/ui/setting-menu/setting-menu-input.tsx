import { ChangeEvent } from 'react';

interface SettingMenuInputProps {
  isAutofocus?: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SettingMenuInput = ({
  isAutofocus,
  value,
  onChange,
}: SettingMenuInputProps) => {
  return (
    <input
      autoFocus={isAutofocus}
      className='text-grey600 w-10 h-10 border border-grey150 rounded-lg font-bold text-base text-center'
      value={value}
      onChange={onChange}
    />
  );
};

export default SettingMenuInput;
