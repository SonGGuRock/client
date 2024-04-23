interface SettingMenuInputProps {
  isAutofocus?: boolean;
  value: string | number;
}

const SettingMenuInput = ({ isAutofocus, value }: SettingMenuInputProps) => {
  return (
    <input
      autoFocus={isAutofocus}
      className='text-grey600 w-10 h-10 border border-grey150 rounded-lg font-bold text-base text-center'
      value={value}
    />
  );
};

export default SettingMenuInput;
