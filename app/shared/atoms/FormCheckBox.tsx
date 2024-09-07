import clsx from 'clsx';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

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

export default FormCheckBox;
