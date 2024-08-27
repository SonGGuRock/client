import { Reservation } from '@/app/lib-temp/definition';
import ClassTimeItem from './class-time-item';
import { ReservationCreateBody } from '@/app/entities/reservations/types';

export type ClassTime = Pick<ReservationCreateBody, 'class_time_id'> & {
  text: string;
};

const CLASS_TIMES: ClassTime[] = [
  { class_time_id: 1, text: '09-12시' },
  { class_time_id: 2, text: '12-15시' },
  { class_time_id: 3, text: '15-18시' },
  { class_time_id: 4, text: '18-21시' },
];
export interface ClassNamesProps {
  classNames?: string;
}

interface ClassTimeProps extends ClassNamesProps {
  selectedItem?: ReservationCreateBody['class_time_id'];
  onClick?: (class_time_id: number) => void;
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
          isSelected={selectedItem === time.class_time_id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ClassTimePicker;
