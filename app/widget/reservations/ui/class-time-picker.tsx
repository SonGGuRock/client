import { ReservationCreateBody } from '@/app/entities/reservations/types';
import { WorkshopIds } from '../../workshops/types';
import ClassTimeItem from './class-time-item';

export interface ClassNamesProps {
  classNames?: string;
}

interface ClassTimeProps extends ClassNamesProps {
  classTimes: WorkshopIds['class_times'];
  selectedItem?: ReservationCreateBody['class_time_id'];
  onClick?: (class_time_id: number) => void;
}
const ClassTimePicker = ({
  classTimes,
  classNames,
  onClick,
  selectedItem,
}: ClassTimeProps) => {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${classNames}`}>
      {classTimes.map((time) => (
        <ClassTimeItem
          key={time.id}
          time={time}
          isSelected={selectedItem === time.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ClassTimePicker;
