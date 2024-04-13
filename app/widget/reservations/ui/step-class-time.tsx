import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import Title from '@/app/shared/ui/atoms/Title';
import { useContext } from 'react';
import ReservationsWeeklySwiper from './reservations-weekly-swiper';
import ClassTimePicker from './class-time-picker';

const StepClassTime = () => {
  const reservation = useContext(ReservationCreateContext);

  return (
    <div>
      <div className='pt-6 pb-4 px-4 '>
        <p className='pb-4 text-grey400 text-sm'>
          <span className='text-grey800 text-sm'>2</span> /3
        </p>
        <Title size='large'>수강 날짜와 시간을 선택해주세요</Title>
      </div>
      <div>
        <ReservationsWeeklySwiper
          style='item-primary'
          onClick={reservation!.fill}
        />
      </div>

      <ClassTimePicker classNames='mt-4' onClick={reservation!.fill} />
    </div>
  );
};

export default StepClassTime;
