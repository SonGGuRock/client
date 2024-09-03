import { Reservation } from '@/app/lib-temp/definition';
import IconHand from '@/app/shared/atoms/icons/icon-hand';
import IconPot from '@/app/shared/atoms/icons/icon-pot';
import isDateInThePast from '@/app/shared/lib/isDateInThePast';
import Image from 'next/image';
import type { ReservationItem } from '../types';

interface ReservationItemsProps {
  reservation: ReservationItem;
}

const ReservationItem = ({
  reservation: {
    id,
    reservation_date,
    start_time,
    work_type,
    remaining_class_count,
    total_class_count,
  },
}: ReservationItemsProps) => {
  const isFulfilled = isDateInThePast(reservation_date);
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
            한선민
          </p>
          <p
            className={`w-full text-xs ${
              isFulfilled ? 'text-white' : 'text-grey400'
            }`}
          >
            {/* 오전 10:00 ~ 오후 12:00 */}
            {start_time}
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
