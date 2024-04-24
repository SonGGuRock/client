import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from './form-date-select';
import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

interface FormDatePickerProps {
  value: Value;
  onChange: Dispatch<SetStateAction<Value>>;
  toggle: () => void;
}

const FormDatePicker = ({ value, onChange, toggle }: FormDatePickerProps) => {
  const classes = clsx(
    'fixed',
    'inset-0',
    'bg-grey900',
    'bg-opacity-50',
    'z-100',
    'flex',
    'items-center',
    'justify-center'
  );

  // absolute top-[-320px] left-0
  return (
    <div className={classes}>
      <Calendar
        calendarType='gregory'
        locale='ko'
        formatDay={(_, date) => date.getDate().toString()}
        value={value}
        onChange={(value) => {
          onChange(value);
          toggle();
        }}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default FormDatePicker;
