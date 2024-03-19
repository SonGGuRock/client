import Image from 'next/image';

type CraftStatus = {
  id: number;
  status: string; //'throw', 'refire'
  descrption: string; // '성형', '재벌'
};

export type CraftProps = {
  status: string;
  imgUrl: string;
  craftName: string;
  craftId: number;
  created_at: string;
};

export default function Craft({
  status,
  imgUrl,
  craftId,
  craftName,
  created_at,
}: CraftProps) {
  // 타입 해결하기!
  // const statusKo = '초벌'

  // const statusObj :StatusObj = {
  //     status: statusKo,
  //     className: ''
  // }
  return (
    <li className='w-full max-w-[32%] h-[170px] relative'>
      <div className='flex items-center rounded-tl-lg rounded-br-lg gap-1 absolute left-0 top-0 px-2 py-2  bg-grey900 '>
        <div className='bg-refire-icon w-[20px] h-[20px]'></div>
        <span className='text-white text-sm'>{status}</span>
      </div>
      <Image
        className='object-cover rounded-lg'
        src='/mock/refire.png'
        alt='재벌'
        width={128}
        height={170}
      />
      <p className='text-sm mt-2'>{craftName}</p>
      <p className='text-sm text-grey400'>{created_at}</p>
    </li>
  );
}
