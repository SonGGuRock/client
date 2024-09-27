'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import DateWeeklySwiper from './reservations-weekly-swiper';
import formatToDayName, {
  EnglishDayName,
} from '@/app/shared/lib/formatToDayName';
import { ReservationClassTime } from '@/app/entities/reservations/types';
import { useParams, useRouter } from 'next/navigation';

export type ReservationDay = {
  date: string;
  day_name: EnglishDayName;
  class_times: ReservationClassTime[];
};

const ReservationWeeklyView = () => {
  const router = useRouter();
  const params = useParams();
  const selectedDate = params.date as string;
  const { data: reservationsDays } = useQueryWithCredentials<ReservationDay[]>(
    'reservations/complexity',
    { type: 'weekly' }
  );

  if (!reservationsDays) {
    return <></>;
  }

  const fommatted = reservationsDays.map((day) => ({
    ...day,
    day_name: formatToDayName(day.day_name),
  }));

  const handleClickDate = (date: string) => {
    router.push(`/reservations/${date}`);
  };
  return (
    <div>
      <DateWeeklySwiper
        days={fommatted}
        onClick={handleClickDate}
        selectedItem={selectedDate}
        style='item-brown-primary'
      />
    </div>
  );
};

export default ReservationWeeklyView;
