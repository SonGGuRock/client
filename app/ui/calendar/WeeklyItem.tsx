import clsx from 'clsx';
import Image from 'next/image';

export type WeeklyItemProps = {
  dayOfWeek: string;
  day: number;
  throwCount: number;
  handbuildCount: number;
};

const WeeklyItem = ({
  dayOfWeek,
  day,
  throwCount,
  handbuildCount,
}: WeeklyItemProps) => {
  //  today 표시

  return (
    <div className='my-auto bg-white h-[110px] rounded-[64px] flex flex-col justify-center'>
      <p className='w-full text-center text-xs font-grey500'>{dayOfWeek}</p>
      <p className='w-full text-center text-base font-semibold mb-2'>{day}</p>
      <span className='w-full flex justify-center'>
        <Image
          src='/icon_pot.png'
          alt='icon of the pot'
          width={20}
          height={20}
        />
        <span className='text-sm text-grey'>{throwCount}</span>
      </span>
      <span className='w-full flex justify-center'>
        <Image
          src='/icon_hand.png'
          alt='icon of the pot'
          width={20}
          height={20}
        />
        <span className='text-sm text-grey'>{handbuildCount}</span>
      </span>
    </div>
  );
};

export default WeeklyItem;
