import ReservationItem from '@/app/widget/reservations/ui/reservations-item';
import { ReservationListItem } from '../types'; 

interface Props {
  reservations: ReservationListItem['reservations'];
}

const ReservationsDailyList = ({ reservations }: Props) => {

  return (
    <div className='flex flex-wrap gap-2 pb-20 bg-white px-4'>
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
};

export default ReservationsDailyList;
