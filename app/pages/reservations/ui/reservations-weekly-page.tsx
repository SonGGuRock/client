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
import {
  ReservationItem,
  ReservationListItem,
} from '@/app/widget/reservations/types';
import { getKrDateWithoutYear } from '@/app/shared/lib/getToday';
import { useParams } from 'next/navigation';

export const ReservationsWeeklyPage = () => {
  const params = useParams();
  const date = params.date as string;
  const { data: times } = useQueryWithCredentials<ReservationListItem[]>(
    'reservations/days',
    { date }
  );

  if (!times) return <div>loading now </div>;

  const hasNoReservation = () => {
    return (
      times.reduce<ReservationItem[]>((acc, cur) => {
        acc.push(...cur.reservations);
        return acc;
      }, []).length === 0
    );
  };

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
      <div className='w-full flex flex-col gap-4 bg-white px-4'>
        {hasNoReservation() ? (
          <div className='w-full py-10 text-sm text-gray-400 text-center'>
            예약이 없습니다{' '}
          </div>
        ) : (
          <>
            {times.map((time) => (
              <ReservationsDailyList
                key={time.id}
                classTimeWithReservations={time}
              />
            ))}
          </>
        )}
      </div>
      <BottomBar />
    </div>
  );
};
