import Image from 'next/image';
import Status, { StatusObj } from '../status';

export default function Photo() {
  // 타입 해결하기!
  // const statusKo = '초벌'

  // const statusObj :StatusObj = {
  //     status: statusKo,
  //     className: ''
  // }
  return (
    <li className='w-[128px] h-[170px] relative'>
      <div className='flex items-center rounded-tl-lg rounded-br-lg gap-1 absolute left-0 top-0 px-2 py-2  bg-grey900 '>
        <div className='bg-refire-icon w-[20px] h-[20px]'></div>
        <span className='text-white text-sm'>재벌</span>
      </div>
      <Image
        className='object-cover rounded-lg'
        src='/mock/refire.png'
        alt='재벌'
        width={128}
        height={170}
      />
      <p className='text-sm mt-2'>한선민</p>
      <p className='text-sm text-grey400'>2024-01-24</p>
    </li>
  );
}
