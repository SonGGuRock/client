import clsx from 'clsx';

type CheckBoxProps = {
  isChecked?: boolean;
  onCheck: () => void;
};

const CheckBox = ({ isChecked = false, onCheck }: CheckBoxProps) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[24px]',
    'h-[24px]',
    'bg-grey100',
    'rounded-md',
    {
      'checked:bg-brown': isChecked,
      'checked:bg-checked-icon': isChecked,
    }
  );
  return (
    <input
      type='checkbox'
      className={checkBoxClasses}
      checked={isChecked}
      onChange={onCheck}
    />
  );
};

export default CheckBox;
