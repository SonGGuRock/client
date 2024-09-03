import IconHand from '@/app/shared/atoms/icons/icon-hand';
import IconPot from '@/app/shared/atoms/icons/icon-pot';
import isDateInThePast from '@/app/shared/lib/isDateInThePast';
import Image from 'next/image';
import type { ClassTimeItem, ReservationItem } from '../types';
import { useParams } from 'next/navigation';

interface ReservationItemsProps {
  reservation: ReservationItem;
  classTime: ClassTimeItem;
}

const ReservationItem = ({
  reservation: { id, work_type, remaining_class_count, total_class_count },
  classTime: { start_time, end_time },
}: ReservationItemsProps) => {
  const params = useParams();
  const date = params.date as string;
  const isFulfilled = isDateInThePast(date);
  return (
    <div
      className={`w-full p-3 ${
        isFulfilled ? 'bg-grey200' : 'bg-grey50'
      } rounded-lg flex gap-2 items-center justfiy-between`}
    >
      <div className='flex gap-2 w-full'>
        {work_type === 'hand' ? <IconHand /> : <IconPot />}
        <div className='flex flex-wrap  '>
          <p
            className={`w-full text-sm ${
              isFulfilled ? 'text-white' : 'text-grey900'
            }`}
          >
            studentName
          </p>
          <p
            className={`w-full text-xs ${
              isFulfilled ? 'text-white' : 'text-grey400'
            }`}
          >
            {`${start_time}:00 - ${end_time}:00`}
          </p>
        </div>
      </div>
      <div className='flex gap-2 min-w-[64px]'>
        <p
          className={`w-fit text-xs min-w-10 ${
            isFulfilled ? 'text-white' : 'text-grey500'
          }`}
        >
          {remaining_class_count} / {total_class_count}회
        </p>
        <Image
          src='/icon/ic-close-circle-18px.svg'
          alt='삭제 아이콘'
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};

export default ReservationItem;
