import Link from 'next/link';
import Label from '../../../../shared/atoms/Label';
import type { Student } from '@/app/entities/students/types';

export type StudentProps = {
  student: Student;
};

const Student = ({
  student: {
    id,
    name,
    profile_picture,
    remaining_class_count,
    last_payment_date,
  },
}: StudentProps) => {
  return (
    <li className='w-full p-3 h-16 bg-grey50 rounded-lg'>
      <Link
        className=' flex justify-between items-center'
        href={`/students/${id}`}
      >
        <div className='flex gap-2 items-center'>
          {/* <Thumbnail id={userId}  /> */}
          <div>
            <p className='text-sm'>{name}</p>
            <p className='text-xs text-grey500'>
              지난 결제일
              <strong className='text-grey600'>{last_payment_date}</strong>
            </p>
          </div>
        </div>
        <Label text={`${remaining_class_count}회`} subtext='남음' />
      </Link>
    </li>
  );
};

export default Student;
