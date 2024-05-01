import { WorkStepType } from '@/app/shared/atoms/work-step-label';
import Image from 'next/image';
import { ClassNamesProps } from '../../reservations/ui/class-time-picker';
import CraftItemWorkstep from './craft-item-workstep';

// type CraftStatus = {
//   id: number;
//   status: string; //'throw', 'refire'
//   descrption: string; // '성형', '재벌'
// };

export interface CraftThumbnailProps extends ClassNamesProps {
  workstep: WorkStepType['ko'];
  imgUrl: string;
  craftName?: string;
  craftId: number;
  created_at?: string;
}

export default function CraftThumbnail({
  workstep,
  imgUrl,
  craftId,
  craftName,
  created_at,
  classNames,
}: CraftThumbnailProps) {
  // 타입 해결하기!
  // const statusKo = '초벌'

  // const statusObj :StatusObj = {
  //     status: statusKo,
  //     className: ''
  // }
  return (
    // w-full max-w-[32%] h-[170px]
    // <li className={` relative ${classNames}`}>
    //   <div className='flex items-center rounded-tl-lg rounded-br-lg gap-1 absolute left-0 top-0 px-2 py-2  bg-grey900 '>
    //     <div className='bg-refire-icon w-[20px] h-[20px]'></div>
    //     <span className='text-white text-sm'>{workstep}</span>
    //   </div>
    //   <Image
    //     className='object-cover rounded-lg'
    //     src='/mock/refire.png'
    //     alt='재벌'
    //     width={128}
    //     height={170}
    //   />
    //   {/* <p className='text-sm mt-2'>{craftName}</p> */}
    //   <p className='text-sm text-grey400'>{created_at}</p>
    // </li>
    <div className={`relative list-none ${classNames}`}>
      <CraftItemWorkstep
        classNames='absolute left-0 top-0'
        workstep='초벌'
        style='black'
      />
      <Image
        className='rounded-lg object-cover block w-full h-full'
        src='/mock/refire.png'
        alt='craft mock'
        width={88}
        height={88}
      />
    </div>
  );
}
