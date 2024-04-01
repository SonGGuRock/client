import Image from 'next/image';
import Title from '../../../shared/ui/atoms/Title';

type VisitPiece = {
  date: string;
  craft: { id: number; picture?: string };
};

type Visit = {
  visit_date: VisitPiece[];
  payment_date: string[];
};
const visit: Visit = {
  visit_date: [
    {
      date: '2024-03-10',
      craft: { id: 1, picture: '/img/craft_default.png' },
    },
    {
      date: '2024-03-25',
      craft: { id: 2 },
    },
  ],
  payment_date: ['2024-03-04', '2024-03-24'],
};

type FormattedVisitPiece = {
  [date: string]: { id: number; picture?: string };
};

const ReservationsStudentCalendar = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const today = now.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const lastDate = new Date(year, month, 0).getDate();
  const lastDayOfLastMonth = new Date(year, month - 1, 0).getDay();

  const getDate = (date: string) => {
    return date.split('-')[2];
  };

  const getDateArr = (date: string[]) => {
    return date.map((date) => getDate(date));
  };

  const reduceDate = (date: VisitPiece[]): FormattedVisitPiece => {
    return date.reduce((acc, cur) => {
      return {
        ...acc,
        [getDate(cur.date)]: { ...cur.craft },
      };
    }, {});
  };

  return (
    <div className='pt-4 pb-4'>
      <Title>{`${year}년 ${month}월`}</Title>
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
          const isPaymentDay = getDateArr(visit.payment_date).includes(
            `${idx + 1}`
          );
          const visited = reduceDate(visit.visit_date)[idx + 1];
          if (isPaymentDay) {
            return (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center text-grey900 text-xs font-bold min-h-9 rounded-lg bg-yellowBeige'
              >
                결제
                {idx + 1 === today && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-4px]'></span>
                )}
              </span>
            );
          } else if (visited) {
            return visited.picture ? (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center min-h-9'
              >
                <Image
                  alt='수강생 작품 썸네일'
                  src={visited.picture}
                  width={36}
                  height={36}
                />
                {idx + 1 === today && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-4px]'></span>
                )}
              </span>
            ) : (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center text-brown text-base bg-brown rounded-full min-h-9'
              >
                {idx + 1 === today && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-4px]'></span>
                )}
              </span>
            );
          } else {
            return (
              <span
                key={idx}
                className='relative w-full inline-flex justify-center items-center text-grey900 text-base min-h-9'
              >
                {idx + 1}
                {idx + 1 === today && (
                  <span className='w-1 h-1 bg-brown rounded-full absolute bottom-[-4px]'></span>
                )}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};
export default ReservationsStudentCalendar;
