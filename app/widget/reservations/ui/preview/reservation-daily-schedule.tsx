import Image from 'next/image';
import { ClassTimeItem } from '../../types';

interface Props {
  classTimes: ClassTimeItem[];
}
const DailySchedule = ({ classTimes }: Props) => {
  return (
    <ul className='flex flex-nowrap'>
      {classTimes?.map((time, idx) => (
        <li key={idx} className='flex flex-wrap gap-2 w-full text-sm'>
          <p className='w-full text-grey700 flex justify-between'>
            <span>{time.start_time}</span>
            {idx === classTimes.length - 1 && <span>{time.end_time}</span>}
          </p>
          <p
            className={`w-full bg-deepGreen py-[2px] font-semibold text-xs text-white text-center ${
              idx === 0 && 'rounded-s-lg'
            } ${idx === classTimes.length - 1 && 'rounded-e-lg'}`}
          >
            여유
          </p>
          <div className='w-full flex flex-nowrap justify-center gap-1'>
            <span className='w-full flex justify-end h-[18px]'>
              <Image
                src='/icon/icon_pot.png'
                alt='icon of the pot'
                width={18}
                height={18}
              />

              <span className='text-sm text-grey'>{time.throw_count}</span>
            </span>

            <span className='w-full flex justify-start h-[18px]'>
              <Image
                src='/icon/icon_hand.png'
                alt='icon of the pot'
                width={18}
                height={18}
              />

              <span className='text-sm text-grey'>{time.hand_count}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DailySchedule;
