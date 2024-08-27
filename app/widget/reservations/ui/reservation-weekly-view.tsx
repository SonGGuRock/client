import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import DateWeeklySwiper from './reservations-weekly-swiper';
import formatToDayName, {
  EnglishDayName,
} from '@/app/shared/lib/formatToDayName';
import { ReservationClassTime } from './time-crowds';

// type ClassTimes = {
//   id: number;
//   start_time: string;
//   end_time: string;
//   throw_count: number;
//   hand_count: number;
// };

export type ReservationDay = {
  date: string;
  day_name: EnglishDayName;
  class_times: ReservationClassTime[];
};

const ReservationWeeklyView = () => {
  const { data: reservationsDays } = useQueryWithCredentials<ReservationDay[]>(
    'reservations/complexity',
    { type: 'weekly' }
  );

  if (!reservationsDays) {
    return <div>loading </div>;
  }

  const fommatted = reservationsDays.map((day) => ({
    ...day,
    day_name: formatToDayName(day.day_name),
  }));
  return (
    <div>
      <DateWeeklySwiper days={fommatted} />
    </div>
  );
};

export default ReservationWeeklyView;
