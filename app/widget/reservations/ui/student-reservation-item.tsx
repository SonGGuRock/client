import IconHand from '@/app/shared/atoms/icons/icon-hand';
import IconPot from '@/app/shared/atoms/icons/icon-pot';
import isDateInThePast from '@/app/shared/lib/isDateInThePast';
import Image from 'next/image';
import { StudentReservation } from '@/app/lib-temp/definition';
import { getKrDateWithoutYear } from '@/app/shared/lib/getToday';

interface ReservationItemsProps {
  reservation: StudentReservation;
}

const StudentReservationItem = ({
  reservation: {
    id,
    reservation_date,
    start_time,
    end_time,
    work_type,
    remaining_class_count,
    total_class_count,
  },
}: ReservationItemsProps) => {
  const isFulfilled = isDateInThePast(reservation_date, end_time);
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
            {getKrDateWithoutYear(reservation_date)}
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

export default StudentReservationItem;
