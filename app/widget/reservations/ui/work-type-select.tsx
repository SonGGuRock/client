import Image from 'next/image';
import { ClassNamesProps } from './class-time-picker';
import useFormFill, { Reservation } from '../lib/use-form-fill';
import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';

const WORK_TYPES: Reservation['work_type'][] = ['throw', 'hand'];

const WorkTypeSelect = ({ classNames }: ClassNamesProps) => {
  const { form, fill } = useFormFill(ReservationCreateContext);

  return (
    <div className={`${classNames} flex gap-2 px-4`}>
      {WORK_TYPES.map((type, idx) => (
        <div
          key={idx}
          onClick={() => {
            fill({ work_type: type });
          }}
          className={`${
            form.work_type === type ? 'border-grey200 bg-grey100' : 'bg-grey50'
          } rounded-lg py-5 px-10 flex gap-4 flex-wrap justify-center max-w-[168px]`}
        >
          <Image
            src={`/img/work_type_${type}.png`}
            alt={`${type} 아이콘`}
            width={90}
            height={100}
          />
          <span className='text-center'>
            {type === 'throw' ? '물레' : '핸드빌딩'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorkTypeSelect;
