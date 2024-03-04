import Image from 'next/image';

export type DAY_DIVIDER = {
  color: string;
  descrption: string;
  start_at: number;
  end_at: number;
};

export const DAY_DIVIDERS: DAY_DIVIDER[] = [
  {
    color: 'deepGreen',
    descrption: '09~12시 ',
    start_at: 9,
    end_at: 12,
  },
  {
    color: 'deepYellow',
    descrption: '12~15시 ',
    start_at: 12,
    end_at: 15,
  },
  {
    color: 'deepOrange',
    descrption: '15~18시 ',
    start_at: 15,
    end_at: 18,
  },
  {
    color: 'deepOrange',
    descrption: '18~21시 ',
    start_at: 18,
    end_at: 21,
  },
];

const Daily = () => {
  return (
    <div className='flex flex-wrap gap-4'>
      <p className='text-lg'>
        수강생 <strong className='text-brown font-semibold'>9명</strong>이{' '}
        <br />
        방문할 예정이에요 👀
      </p>

      <div>
        <ul className='flex flex-nowrap gap-2'>
          {DAY_DIVIDERS.map((time, idx) => (
            <li
              key={idx}
              className='flex flex-wrap gap-[4px] w-full p-2 h-[86px] bg-white rounded-md text-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M2.39999 11.9999C2.39999 9.45382 3.41142 7.01203 5.21177 5.21168C7.01211 3.41133 9.45391 2.3999 12 2.3999L12 11.9999L2.39999 11.9999Z'
                  fill='#FAF9F7'
                />

                <path
                  d='M12 21.5999C17.3019 21.5999 21.6 17.3018 21.6 11.9999C21.6 6.69797 17.3019 2.3999 12 2.3999C6.69806 2.3999 2.39999 6.69797 2.39999 11.9999C2.39999 17.3018 6.69806 21.5999 12 21.5999Z'
                  stroke='#242320'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />

                <path
                  d='M12 6V12H6'
                  stroke='#242320'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className=' font-semibold'>{time.descrption}</span>

              <div className='w-full flex flex-nowrap justify-between'>
                <span className='w-full flex'>
                  <Image
                    src='/icon_pot.png'
                    alt='icon of the pot'
                    width={20}
                    height={20}
                  />

                  <span className='text-sm text-grey'>0</span>
                </span>

                <span className='w-full flex'>
                  <Image
                    src='/icon_hand.png'
                    alt='icon of the pot'
                    width={20}
                    height={20}
                  />

                  <span className='text-sm text-grey'>0</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Daily;
