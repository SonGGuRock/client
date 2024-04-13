import { Reservation } from '../lib/use-reservation-create';

type CLASS_TIME = Pick<Reservation, 'reservation_class_time_id'> & {
  text: string;
};

const CLASS_TIMES: CLASS_TIME[] = [
  { reservation_class_time_id: '1', text: '09-12시' },
  { reservation_class_time_id: '2', text: '12-15시' },
  { reservation_class_time_id: '3', text: '15-18시' },
  { reservation_class_time_id: '4', text: '18-21시' },
];
export interface ClassNamesProps {
  classNames?: string;
}

interface ClassTimeProps extends ClassNamesProps {
  onClick: (reservationProperty: Partial<Reservation>) => void;
}
const ClassTimePicker = ({ classNames, onClick }: ClassTimeProps) => {
  // const handlePick = ()=>{
  //     onClick(timeId)
  // }

  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${classNames}`}>
      {CLASS_TIMES.map((time) => (
        <div
          key={time.reservation_class_time_id}
          onClick={() => {
            onClick({
              reservation_class_time_id: time.reservation_class_time_id,
            });
          }}
          className='rounded-lg bg-grey50 text-grey900 text-center text-sm py-3'
        >
          {time.text}
        </div>
      ))}
      ;
    </div>
  );
};

export default ClassTimePicker;
