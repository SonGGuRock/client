'use client';

import 'swiper/css';

import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';

import DailySchedule from '@/app/widget/reservations/ui/preview/reservation-daily-schedule';
import ReservationsDailyList from '../../../widget/reservations/ui/reservations-daily-list';
import Link from 'next/link';
import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';
import ReservationWeeklyView from '@/app/widget/reservations/ui/reservation-weekly-view';
import { ButtonIndex } from '@/app/shared/atoms/button';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationListItem } from '@/app/widget/reservations/types';
import {
  getKrDateWithoutYear,
  getTodayWithoutYear,
} from '@/app/shared/lib/getToday';
import { useParams } from 'next/navigation';

export const ReservationsWeeklyPage = () => {
  const params = useParams();
  const date = params.date as string;
  const { data: times } = useQueryWithCredentials<ReservationListItem[]>(
    'reservations/days',
    { date }
  );

  if (!times) return <div>loading now </div>;

  return (
    <div>
      <ReservationsHeader />
      <div className='mt-4 px-4'>
        <Header>
          <Header.Title>{getKrDateWithoutYear(date)}</Header.Title>
          <ButtonIndex size='small'>
            <Link href='/reservations/create' className='flex items-center'>
              <ButtonIndex.AddIcon />
              수업등록
            </Link>
          </ButtonIndex>
        </Header>
      </div>

      <ReservationWeeklyView />

      <div className='py-6 bg-white px-4'>
        <DailySchedule classTimes={times} />
      </div>
      {times.map((time) => (
        <ReservationsDailyList key={time.id} classTimeWithReservations={time} />
      ))}
      <BottomBar />
    </div>
  );
};
