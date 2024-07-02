import { Reservation } from '@/app/lib-temp/definition';
import ClassTimeItem from './class-time-item';

export type ClassTime = Pick<Reservation, 'reservation_date'> & {
  text: string;
};

const CLASS_TIMES: ClassTime[] = [
  { reservation_date: '1', text: '09-12시' },
  { reservation_date: '2', text: '12-15시' },
  { reservation_date: '3', text: '15-18시' },
  { reservation_date: '4', text: '18-21시' },
];
export interface ClassNamesProps {
  classNames?: string;
}

interface ClassTimeProps extends ClassNamesProps {
  selectedItem: Reservation['reservation_date'];
  onClick?: (reservationProperty: Partial<Reservation>) => void;
}
const ClassTimePicker = ({
  classNames,
  onClick,
  selectedItem,
}: ClassTimeProps) => {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${classNames}`}>
      {CLASS_TIMES.map((time) => (
        <ClassTimeItem
          time={time}
          isSelected={selectedItem === time.reservation_date}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ClassTimePicker;
