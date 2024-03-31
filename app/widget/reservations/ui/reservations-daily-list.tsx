import ReservationItem from '@/app/ui/reservation/ReservationItem'

const ReservationsDailyList = ( )=>{
    return <div className='flex flex-wrap px-4 gap-2 pb-20'>
    <ReservationItem isFulfilled={false} />
    <ReservationItem isFulfilled={false} />
    <ReservationItem isFulfilled={false} />
    <ReservationItem isFulfilled />
  </div>}

  export default ReservationsDailyList;