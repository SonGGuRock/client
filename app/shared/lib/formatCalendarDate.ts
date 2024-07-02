import { Value } from '../modules/form-date-input';
import { formatDate } from './formatDate';

const formatCalendarDate = (value: Value): string => {
  return Array.isArray(value)
    ? `${formatDate(value[0])} - ${formatDate(value[1])}`
    : formatDate(value);
};

export default formatCalendarDate;
