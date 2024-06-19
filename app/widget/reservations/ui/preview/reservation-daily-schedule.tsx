import Image from 'next/image';

export type DAY_DIVIDER = {
  id: number;
  start_at: number;
  end_at: number;
};

export const DAY_DIVIDERS: DAY_DIVIDER[] = [
  {
    id: 1,
    start_at: 9,
    end_at: 12,
  },
  {
    id: 2,
    start_at: 12,
    end_at: 15,
  },
  {
    id: 3,
    start_at: 15,
    end_at: 18,
  },
  {
    id: 4,
    start_at: 18,
    end_at: 21,
  },
];
const DailySchedule = () => {
  return (
    <ul className='flex flex-nowrap'>
      {DAY_DIVIDERS.map((time, idx) => (
        <li key={idx} className='flex flex-wrap gap-2 w-full text-sm'>
          <p className='w-full text-grey700 flex justify-between'>
            <span>{time.start_at}</span>
            {idx === DAY_DIVIDERS.length - 1 && <span>{time.end_at}</span>}
          </p>
          <p
            className={`w-full bg-deepGreen py-[2px] font-semibold text-xs text-white text-center ${
              idx === 0 && 'rounded-s-lg'
            } ${idx === DAY_DIVIDERS.length - 1 && 'rounded-e-lg'}`}
          >
            여유
          </p>
          <div className='w-full flex flex-nowrap justify-center gap-1'>
            <span className='w-full flex justify-end h-[18px]'>
              <Image
                src='/icon_pot.png'
                alt='icon of the pot'
                width={18}
                height={18}
              />

              <span className='text-sm text-grey'>0</span>
            </span>

            <span className='w-full flex justify-start h-[18px]'>
              <Image
                src='/icon_hand.png'
                alt='icon of the pot'
                width={18}
                height={18}
              />

              <span className='text-sm text-grey'>0</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DailySchedule;
