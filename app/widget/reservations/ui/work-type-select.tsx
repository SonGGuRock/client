import Image from 'next/image';
import { ClassNamesProps } from './class-time-picker';
import useFormFill from '../../../shared/modules/stepper/lib/use-form-fill';
import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import { ReservationCreateBody } from '@/app/entities/reservations/types';

// const WORK_TYPES: ReservationCreateBody['work_type_id'] = ['throw', 'hand'];

const WORK_TYPES: ReservationCreateBody['work_type_id'][] = [0, 1];
const WorkTypeSelect = ({ classNames }: ClassNamesProps) => {
  const { form, fill } = useFormFill(ReservationCreateContext);

  return (
    <div className={`${classNames} flex gap-2`}>
      {WORK_TYPES.map((typeId, idx) => (
        <div
          key={idx}
          onClick={() => {
            fill({ work_type_id: typeId });
          }}
          className={`${
            form.work_type_id === typeId
              ? 'border-grey200 bg-grey100'
              : 'bg-grey50'
          } rounded-lg py-5 px-10 flex gap-4 flex-wrap justify-center max-w-[168px]`}
        >
          <Image
            src={`/img/work_type_${typeId === 0 ? 'throw' : 'hand'}.png`}
            alt={`${typeId} 아이콘`}
            width={90}
            height={100}
          />
          <span className='text-center'>
            {typeId === 0 ? '물레' : '핸드빌딩'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorkTypeSelect;
