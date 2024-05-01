import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import clsx from 'clsx';

interface CheckBoxProps extends ClassNamesProps {
  isChecked?: boolean;
  isReadOnly?: boolean;
  onCheck?: () => void;
  style?: 'brown' | 'grey';
}

const CheckBox = ({
  isChecked = false,
  isReadOnly = false,
  onCheck,
  style = 'brown',
  classNames,
}: CheckBoxProps) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[24px]',
    'h-[24px]',
    'rounded-lg',
    {
      'bg-grey100': style === 'brown',
      'bg-todo-check-icon': style === 'brown',
      'checked:bg-brown': isChecked && style === 'brown',
      'checked:bg-checked-icon': isChecked && style === 'brown',
    },
    {
      'opacity-50': style === 'grey',
      // 'bg--check-off-icon': style === 'grey',
      'checked:bg-check-icon': isChecked && style === 'grey',
      'bg-center': style === 'grey',
      border: style === 'grey',
      'border-white': style === 'grey',
    }
  );
  return (
    <input
      readOnly={isReadOnly}
      type='checkbox'
      className={`${checkBoxClasses} ${classNames}`}
      checked={isChecked}
      onChange={onCheck}
    />
  );
};

export default CheckBox;
