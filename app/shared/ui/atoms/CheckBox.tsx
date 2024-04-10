import clsx from 'clsx';

type CheckBoxProps = {
  isChecked?: boolean;
  isReadOnly?: boolean;
  onCheck?: () => void;
  style?: 'brown' | 'grey';
};

const CheckBox = ({
  isChecked = false,
  isReadOnly = false,
  onCheck,
  style = 'brown',
}: CheckBoxProps) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[24px]',
    'h-[24px]',
    'rounded-md',
    {
      'bg-grey100': style === 'brown',
      'bg-todo-check-icon': style === 'brown',
      'checked:bg-brown': isChecked && style === 'brown',
      'checked:bg-checked-icon': isChecked && style === 'brown',
    },
    {
      'opacity-50': style === 'grey',
      'bg-grey-check-off-icon': style === 'grey',
      'checked:bg-grey-check-on-icon': isChecked && style === 'grey',
    }
  );
  return (
    <input
      readOnly={isReadOnly}
      type='checkbox'
      className={checkBoxClasses}
      checked={isChecked}
      onChange={onCheck}
    />
  );
};

export default CheckBox;
