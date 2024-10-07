import ReservationItem from '@/app/widget/reservations/ui/reservations-item';
import { ReservationListItem } from '../types';

interface Props {
  classTimeWithReservations: ReservationListItem;
}

const ReservationsDailyList = ({ classTimeWithReservations }: Props) => {
  const { reservations: reservationList, ...classTime } =
    classTimeWithReservations;
  return (
    <div>
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
