import clsx from 'clsx';
import { class_time } from '../../workshops/types';

interface ClassTimeItemProps {
  time: class_time;
  onClick?: (class_time_id: number) => void;
  isSelected: boolean;
}

const ClassTimeItem = ({ time, onClick, isSelected }: ClassTimeItemProps) => {
  const handleClick = () => {
    if (!onClick) {
      return;
    } else {
      onClick(time.id);
    }
  };
  const classes = clsx(
    {
      'bg-grey100': isSelected === true,
      'border-grey200': isSelected === true,
    },
    { 'bg-grey50': isSelected === false }
  );
  return (
    <div
      key={time.id}
      onClick={handleClick}
      className={`rounded-lg text-grey900 text-center text-sm py-3 ${classes}`}
    >
      {time.start_time}-{time.end_time}
    </div>
  );
};

export default ClassTimeItem;
