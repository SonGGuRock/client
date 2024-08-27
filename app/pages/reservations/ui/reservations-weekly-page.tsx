'use client';

import 'swiper/css';

import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';

import DailySchedule from '@/app/widget/reservations/ui/preview/reservation-daily-schedule';
import ReservationsDailyList from '../../../widget/reservations/ui/reservations-daily-list';
import DateWeeklySwiper from '@/app/widget/reservations/ui/reservations-weekly-swiper';
import Link from 'next/link';
import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';
import ReservationWeeklyView from '@/app/widget/reservations/ui/reservation-weekly-view';
import { ButtonIndex } from '@/app/shared/atoms/button';

export const ReservationsWeeklyPage = () => {
  return (
    <div>
      <ReservationsHeader />
      <div className='mt-4 px-4'>
        <Header>
          <Header.Title>2월 24일 토요일</Header.Title>
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
        <DailySchedule />
      </div>
      {/* TODO:   /reservations/days 오늘 기준으로 요청 */}
      <ReservationsDailyList />
      <BottomBar />
    </div>
  );
};
