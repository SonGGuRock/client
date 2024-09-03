import ReservationItem from '@/app/widget/reservations/ui/reservations-item';
import { ReservationListItem } from '../types';

interface Props {
  classTimeWithReservations: ReservationListItem;
}

const ReservationsDailyList = ({ classTimeWithReservations }: Props) => {
  const { reservations: reservationList, ...classTime } =
    classTimeWithReservations;
  return (
    <div className='flex flex-wrap gap-2 pb-20 bg-white px-4'>
      {reservationList.map((reservation) => (
        <ReservationItem
          key={reservation.id}
          reservation={reservation}
          classTime={classTime}
        />
      ))}
    </div>
  );
};

export default ReservationsDailyList;
