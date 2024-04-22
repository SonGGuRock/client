'use client';

import 'swiper/css';

import { ButtonIndex } from '@/app/shared/atoms/button';
import BottomBar from '@/app/shared/modules/BottomBar';
import Header from '@/app/shared/modules/header';

import DailySchedule from '@/app/widget/calendar/DailySchedule';
import ReservationsDailyList from '../../../widget/reservations/ui/reservations-daily-list';
import ReservationsHeader from '../../../widget/reservations/ui/reservations-header';
import ReservationsWeeklySwiper from '@/app/widget/reservations/ui/reservations-weekly-swiper';

export const ReservationsWeeklyPage = () => {
  return (
    <div>
      <div className='py-3 px-4 bg-beige'>
        <ReservationsHeader />

        <div className='mt-4'>
          <Header>
            <Header.Title>2월 24일 토요일</Header.Title>
            <ButtonIndex size='small'>
              <ButtonIndex.AddIcon />
              수업등록
            </ButtonIndex>
          </Header>
        </div>
      </div>

      <ReservationsWeeklySwiper />
      <div className='py-6 px-4'>
        <DailySchedule />
      </div>

      <ReservationsDailyList />
      <BottomBar />
    </div>
  );
};
