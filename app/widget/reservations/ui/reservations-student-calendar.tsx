import Image from 'next/image';
import Title from '../../../shared/atoms/Title';
import { StuentVisitWithDate } from '@/app/entities/students/types';
import { getKrYearAndMonth } from '@/app/shared/lib/getToday';

interface ReservationsStudentCalendarProps {
  visits: StuentVisitWithDate[];
  yearAndMonth: string;
  onClickDate: (reservationId: number, reservationDate: string) => void;
}

const ReservationsStudentCalendar = ({
  visits,
  yearAndMonth,
  onClickDate,
}: ReservationsStudentCalendarProps) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const today = now.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const lastDate = new Date(year, month, 0).getDate();
  const lastDayOfLastMonth = new Date(year, month - 1, 0).getDay();

  const getDate = (date: string) => {
    return Number(date.split('-')[2]);
  };
  const paymentDays = visits.filter((visit) => visit.payment === true);
  const reservationDays = visits.filter(
    (visit) => visit.reservation_id !== null
  );

  const isToday = (day: number) => {
    return day === today && Number(yearAndMonth.split('-')[1]) === month;
  };

  return (
    <div className='pt-4 pb-4'>
      <Title>{getKrYearAndMonth(yearAndMonth)}</Title>
      {/* {dayOfWeek[day]} */}
      <div className='grid grid-cols-7 w-full justify-center pt-4 pb-3 gap-4'>
        {dayOfWeek.map((day, idx) => (
          <span key={day + idx} className='text-center text-grey500 text-sm'>
            {day}
          </span>
        ))}
      </div>

      <div className='grid grid-cols-7 w-full justify-center items-center gap-4'>
        {new Array(lastDayOfLastMonth + 1).fill(null).map((val, idx) => (
          <span key={`empty-${idx}`} className='min-h-full'></span>
        ))}
        {new Array(lastDate).fill(null).map((_, idx) => {
          const isPaymentDay = paymentDays.find((day) => {
            return getDate(day.date) === idx + 1;
          });
          const visitDay = reservationDays.find(
            (day) => getDate(day.date) === idx + 1
          );

          if (isPaymentDay) {
            return (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center text-white text-xs font-bold min-h-9 rounded-full bg-yellowBeige'
              >
                결제
                {isToday(idx + 1) && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-8px]'></span>
                )}
              </span>
            );
          } else if (!!visitDay) {
            return visitDay.craft_item ? (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center min-h-9'
              >
                {isToday(idx + 1) && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-8px]'></span>
                )}
                <Image
                  alt='수강생 작품 썸네일'
                  src={visitDay.craft_item.picture ?? '/img/craft_default.png'}
                  width={36}
                  height={36}
                  onClick={() => {
                    onClickDate(
                      visitDay.reservation_id!,
                      getKrYearAndMonth(yearAndMonth) + ` ${idx + 1}일`
                    );
                  }}
                  className='cursor-pointer'
                />
              </span>
            ) : (
              <span
                key={idx}
                onClick={() => {
                  onClickDate(
                    visitDay.reservation_id!,
                    getKrYearAndMonth(yearAndMonth) + ` ${idx + 1}일`
                  );
                }}
                className='cursor-pointer relative w-full inline-flex justify-center items-center text-white text-base bg-brown rounded-full min-h-9 opacity-50'
              >
                {idx + 1 === today && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-8px]'></span>
                )}
                {idx + 1}
              </span>
            );
          } else {
            return (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center text-grey900 text-base min-h-9'
              >
                {isToday(idx + 1) && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute top-[-8px]'></span>
                )}
                {idx + 1}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};
export default ReservationsStudentCalendar;
