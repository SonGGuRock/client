import AllVisitButton from '../../reservations/ui/all-visit-button';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import StudentReservationItem from '../../reservations/ui/student-reservation-item';
import sliceList from '@/app/shared/lib/sliceList';
import EmptyDataNotice from '@/app/shared/atoms/EmptyDataNotice';
import { StudentReservation } from '@/app/entities/reservations/types';

interface StudentReservationListProps {
  id: number;
  name: string;
}

const StudentReservationList = ({ id, name }: StudentReservationListProps) => {
  const { data: reservations, isLoading } = useQueryWithCredentials<
    StudentReservation[]
  >(`/reservations/students/${id}`);
  if (isLoading) return <div>예약 내역을 불러오고 있어요!</div>;
  if (!reservations) return <div>예약 내역이 없습니다</div>;

  const { limited, rest } = sliceList(4, reservations.reverse());
  return (
    <div className='flex flex-wrap p-4 gap-2'>
      <p className='w-full text-right text-xs text-grey500'>
        최신 4개까지만 보여요
      </p>
      {reservations.length !== 0 ? (
        <>
          {limited.map((reservation) => (
            <StudentReservationItem
              key={reservation.id}
              reservation={reservation}
            />
          ))}
        </>
      ) : (
        <EmptyDataNotice>예약 내역이 없습니다</EmptyDataNotice>
      )}
      <AllVisitButton studentId={id} studentName={name} />
    </div>
  );
};

export default StudentReservationList;
