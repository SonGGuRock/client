import { Reservation } from '../lib/use-reservation-create';
import ClassTimeItem from './class-time-item';

export type ClassTime = Pick<Reservation, 'reservation_class_time_id'> & {
  text: string;
};

const CLASS_TIMES: ClassTime[] = [
  { reservation_class_time_id: '1', text: '09-12시' },
  { reservation_class_time_id: '2', text: '12-15시' },
  { reservation_class_time_id: '3', text: '15-18시' },
  { reservation_class_time_id: '4', text: '18-21시' },
];
export interface ClassNamesProps {
  classNames?: string;
}

interface ClassTimeProps extends ClassNamesProps {
  selectedItem: Reservation['reservation_class_time_id'];
  onClick: (reservationProperty: Partial<Reservation>) => void;
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
          isSelected={selectedItem === time.reservation_class_time_id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ClassTimePicker;
