import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import Title from '@/app/shared/atoms/Title';
import { useContext } from 'react';
import ReservationsWeeklySwiper from './reservations-weekly-swiper';
import ClassTimePicker from './class-time-picker';
import useFormFill from '../../../shared/modules/stepper/lib/use-form-fill';

const StepClassTime = () => {
  const { form, fill } = useFormFill(ReservationCreateContext);

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
          onClick={fill}
          selectedItem={form.reservation_date}
        />
      </div>

      <ClassTimePicker
        classNames='mt-4 px-4'
        onClick={fill}
        selectedItem={form.reservation_class_time_id}
      />
      {/* <div className='my-4 px-4'>
        <span>수강일 : {reservation?.data?.reservation_date}</span>
        <span>수강시간 : {reservation?.data?.reservation_class_time_id}</span>
      </div> */}
    </div>
  );
};

export default StepClassTime;
