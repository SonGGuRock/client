import clsx from 'clsx';
import { ClassTime } from './class-time-picker';

interface ClassTimeItemProps {
  time: ClassTime;
  onClick?: (class_time_id: number) => void;
  isSelected: boolean;
}

const ClassTimeItem = ({ time, onClick, isSelected }: ClassTimeItemProps) => {
  const handleClick = () => {
    if (!onClick) {
      return;
    } else {
      onClick(time.class_time_id);
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
      key={time.class_time_id}
      onClick={handleClick}
      className={`rounded-lg text-grey900 text-center text-sm py-3 ${classes}`}
    >
      {time.text}
    </div>
  );
};

export default ClassTimeItem;
