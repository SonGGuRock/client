import Image from 'next/image';
import { ClassNamesProps } from './class-time-picker';
import useFormFill from '../../../shared/modules/stepper/lib/use-form-fill';
import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import { ReservationCreateBody } from '@/app/entities/reservations/types';
import { WorkshopIds } from '../../workshops/types';

// const WORK_TYPES: ReservationCreateBody['work_type_id'] = ['throw', 'hand'];

interface Props extends ClassNamesProps {
  workTypes: WorkshopIds[`work_types`];
}

const WorkTypeSelect = ({ workTypes, classNames }: Props) => {
  const { form, fill } = useFormFill(ReservationCreateContext);

  return (
    <div className={`${classNames} flex gap-2`}>
      {workTypes.map((type, idx) => (
        <div
          key={idx}
          onClick={() => {
            fill({ work_type_id: type.id });
          }}
          className={`${
            form.work_type_id === type.id
              ? 'border-grey200 bg-grey100'
              : 'bg-grey50'
          } rounded-lg py-5 px-10 flex gap-4 flex-wrap justify-center max-w-[168px]`}
        >
          <Image
            src={`/img/work_type_${type.type}.png`}
            alt={`${type.type} 아이콘`}
            width={90}
            height={100}
          />
          <span className='text-center'>
            {type.type === 'hand' ? '핸드빌딩' : '물레'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorkTypeSelect;
