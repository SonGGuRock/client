import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import clsx from 'clsx';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface CheckBoxProps extends ClassNamesProps {
  isChecked?: boolean;
  isReadOnly?: boolean;
  onCheck?: () => void;
  style?: 'brown' | 'grey';
  name?: string;
}

const CheckBox = ({
  isChecked = false,
  isReadOnly = false,
  onCheck,
  style = 'brown',
  classNames,
  name,
}: CheckBoxProps) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[28px]',
    'h-[24px]',
    'rounded',
    {
      'bg-grey100': style === 'brown',
      'bg-todo-check-icon': style === 'brown',
      'checked:bg-brown': isChecked && style === 'brown',
      'checked:bg-checked-icon': isChecked && style === 'brown',
    },
    {
      'opacity-50': style === 'grey',
      'checked:bg-checked-icon': isChecked && style === 'grey',
      'bg-center': style === 'grey',
      border: style === 'grey',
      'border-white': style === 'grey',
      'bg-grey900': style === 'grey',
    }
  );
  return (
    <input
      readOnly={isReadOnly}
      name={name}
      type='checkbox'
      className={`${checkBoxClasses} ${classNames}`}
      checked={isChecked}
      onChange={onCheck}
    />
  );
};

export default CheckBox;

interface FormCheckBoxProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: boolean;
  style?: 'brown' | 'grey';
  classNames?: string;
}

export const FormCheckBox = <T extends FieldValues>({
  register,
  name,
  defaultValue = false,
  style = 'brown',
  classNames = '',
}: FormCheckBoxProps<T>) => {
  const checkBoxClasses = clsx(
    'appearance-none',
    'w-[24px]',
    'h-[24px]',
    'rounded-lg',
    {
      'bg-grey100': style === 'brown',
      'bg-todo-check-icon': style === 'brown',
      'checked:bg-brown': style === 'brown',
      'checked:bg-checked-icon': style === 'brown',
      'opacity-50': style === 'grey',
      'checked:bg-check-icon': style === 'grey',
      'bg-center': style === 'grey',
      border: style === 'grey',
      'border-white': style === 'grey',
    },
    classNames
  );

  return (
    <input
      type='checkbox'
      className={checkBoxClasses}
      defaultChecked={defaultValue}
      {...register(name)}
    />
  );
};
