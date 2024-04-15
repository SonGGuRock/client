import clsx from 'clsx';
import { Reservation } from '../lib/use-reservation-create';
import { ClassTime } from './class-time-picker';

interface ClassTimeItemProps {
  time: ClassTime;
  onClick: (reservationProperty: Partial<Reservation>) => void;
  isSelected: boolean;
}

const ClassTimeItem = ({ time, onClick, isSelected }: ClassTimeItemProps) => {
  const classes = clsx(
    {
      'bg-grey100': isSelected === true,
      'border-grey200': isSelected === true,
    },
    { 'bg-grey50': isSelected === false }
  );
  return (
    <div
      key={time.reservation_class_time_id}
      onClick={() => {
        onClick({
          reservation_class_time_id: time.reservation_class_time_id,
        });
      }}
      className={`rounded-lg text-grey900 text-center text-sm py-3 ${classes}`}
    >
      {time.text}
    </div>
  );
};

export default ClassTimeItem;
