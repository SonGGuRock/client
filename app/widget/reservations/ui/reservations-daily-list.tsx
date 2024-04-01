import ReservationItem from '@/app/widget/reservations/ui/reservations-item';

const ReservationsDailyList = () => {
  return (
    <div className='flex flex-wrap px-4 gap-2 pb-20'>
      <ReservationItem isFulfilled={false} />
      <ReservationItem isFulfilled={false} />
      <ReservationItem isFulfilled={false} />
      <ReservationItem isFulfilled />
    </div>
  );
};

export default ReservationsDailyList;
