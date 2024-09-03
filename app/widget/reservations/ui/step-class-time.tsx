import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import Title from '@/app/shared/atoms/Title';
import DateWeeklySwiper from './reservations-weekly-swiper';
import ClassTimePicker from './class-time-picker';
import useFormFill from '../../../shared/modules/stepper/lib/use-form-fill';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { ReservationDay } from './reservation-weekly-view';
import formatToDayName from '@/app/shared/lib/formatToDayName';
import type { WorkshopIds } from '../../workshops/types';

const StepClassTime = () => {
  const { data: reservationsDays } = useQueryWithCredentials<ReservationDay[]>(
    'reservations/complexity',
    { type: 'weekly' }
  );

  const { data: workshopIds } = useQueryWithCredentials<WorkshopIds>(
    'workshops/settings/ids'
  );

  const { form, fill } = useFormFill(ReservationCreateContext);

  if (!reservationsDays || !workshopIds) {
    return <div>loading </div>;
  }

  const fommatted = reservationsDays.map((day) => ({
    ...day,
    day_name: formatToDayName(day.day_name),
  }));
  return (
    <div>
      <div className='pt-1 pb-4 '>
        <Title size='large'>수강 날짜와 시간을 선택해주세요</Title>
      </div>
      <div>
        <DateWeeklySwiper
          days={fommatted}
          style='item-primary'
          onClick={(date) => {
            fill({ reservation_date: date });
          }}
          selectedItem={form.reservation_date}
        />
      </div>

      <ClassTimePicker
        classTimes={workshopIds?.class_times}
        classNames='mt-4 px-4'
        onClick={(class_time_id) => {
          fill({ class_time_id: class_time_id });
        }}
        selectedItem={form.class_time_id}
      />
      {/* <div className='my-4 px-4'>
        <span>수강일 : {reservation?.data?.reservation_date}</span>
        <span>수강시간 : {reservation?.data?.reservation_class_time_id}</span>
      </div> */}
    </div>
  );
};

export default StepClassTime;
