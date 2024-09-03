import { Reservation } from '@/app/lib-temp/definition';
import AllVisitButton from '../../reservations/ui/all-visit-button';
import ReservationItem from '../../reservations/ui/reservations-item';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';

interface StudentReservationListProps {
  id: number;
}

const StudentReservationList = ({ id }: StudentReservationListProps) => {
  const { data: reservations, isLoading } = useQueryWithCredentials<
    Reservation[]
  >(`/reservations/students/${id}`);
  if (isLoading) return <div>예약 내역을 불러오고 있어요!</div>;
  if (!reservations) return <div>예약 내역이 없습니다</div>;
  return (
    <div className='flex flex-wrap p-4 gap-2'>
      {/* {reservations.map((reservation, idx) => (
        <ReservationItem
          key={reservation.id + idx}
          reservation={reservation}
          classTime={reservation}
        />
      ))} */}
      <AllVisitButton />
    </div>
  );
};

export default StudentReservationList;
