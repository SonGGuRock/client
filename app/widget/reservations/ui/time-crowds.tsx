import Cookies from 'js-cookie';
import { ClassTime } from '../../workshops/api/type';

export type ReservationClassTime = {
  id: number;
  throw_count: number;
  hand_count: number;
} & ClassTime;

interface Props {
  classTimes: ReservationClassTime[];
}

export const TimeCrowds = ({ classTimes }: Props) => {
  const throwCapacity = parseInt(Cookies.get('throw') ?? '0');
  const handCapacity = parseInt(Cookies.get('hand') ?? '0');
  const capacity = throwCapacity + handCapacity;

  const busyClass = 'bg-deepOrange';
  const notBusyClass = 'bg-deepGreen';
  const normalClass = 'bg-deepYellow';

  const getBusyClass = (throwCount: number, handCount: number) => {
    const reservationCount = throwCount + handCount;
    const rate = capacity / reservationCount;
    if (rate > 5) {
      return notBusyClass;
    } else if (rate <= 5 && rate >= 2) {
      return normalClass;
    } else {
      busyClass;
    }
  };
  return (
    <div className='w-8 flex rounded-xl h-1 '>
      {classTimes.map((time, idx) => {
        if (idx === 0) {
          return (
            <span
              key={time.id}
              className={`w-full h-1 rounded-l-2xl ${getBusyClass(
                time.throw_count,
                time.hand_count
              )}`}
            ></span>
          );
        } else if (idx === classTimes.length - 1) {
          return (
            <span
              key={time.id}
              className={`w-full h-1 rounded-r-2xl ${getBusyClass(
                time.throw_count,
                time.hand_count
              )}`}
            ></span>
          );
        } else {
          return (
            <span
              key={time.id}
              className={`w-full h-1 ${getBusyClass(
                time.throw_count,
                time.hand_count
              )}`}
            ></span>
          );
        }
      })}
    </div>
  );
};
