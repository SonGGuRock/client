import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from './form-date-input';
import clsx from 'clsx';

interface FormDatePickerProps {
  value: Value;
  onChange: (value: Value) => void;
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
