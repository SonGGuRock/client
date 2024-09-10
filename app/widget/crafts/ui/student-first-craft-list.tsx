'use client';

import { CraftSummaryForStudent } from '@/app/entities/crafts/types';
import CraftItem from './craft-item';
import Image from 'next/image';
import IconArrowRight from '@/app/shared/atoms/icons/icon-arrow-right';
import { useRouter } from 'next/navigation';

interface StudentsFirstCraftListProps {
  studentList: CraftSummaryForStudent[];
}

const StudentsFirstCraftList = ({
  studentList,
}: StudentsFirstCraftListProps) => {
  const router = useRouter();
  const handleMore = (studentId: number) => {
    router.push(`/students/${studentId}`);
  };
  return (
    <div className='mt-4 flex gap-8'>
      {studentList.map((student) => (
        <div key={student.id} className='w-full'>
          <div
            className='px-4 w-full flex justify-between'
            onClick={() => {
              handleMore(student.id);
            }}
          >
            <span className='flex gap-2 items-center'>
              <Image
                src={student.profile_picture}
                alt={student.name}
                width={32}
                height={32}
                className='rounded-full'
              />
              <span className='text-sm text-grey900 font-semibold'>
                {student.name}
              </span>
            </span>
            <span className='flex gap-1 items-center text-grey500 text-xs'>
              더보기 <IconArrowRight />
            </span>
          </div>
          <span className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
            {student.crafts.map((craft) => (
              <CraftItem key={craft.id} craft={craft} onClick={() => {}} />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StudentsFirstCraftList;
