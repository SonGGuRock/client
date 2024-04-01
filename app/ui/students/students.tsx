import Title from '../../shared/ui/atoms/Title';
import GoTo from '../../shared/ui/atoms/GoTo';
import Student, { UserProps } from './student/Student';
import ExpandedList from '../../shared/ui/modules/ExpandedList';
import sliceItems from '@/app/utils/sliceItems';

export const students: UserProps[] = [
  {
    userId: 1,
    userName: '최지영',
    lastPaymentDate: '2024. 01. 25',
    remainingCount: 1,
  },
  {
    userId: 2,
    userName: '한선민',
    lastPaymentDate: '2024. 01. 25',
    remainingCount: 1,
  },
  {
    userId: 3,
    userName: '이민지',
    lastPaymentDate: '2024. 01. 25',
    remainingCount: 1,
  },
  {
    userId: 4,
    userName: '최지영',
    lastPaymentDate: '2024. 01. 25',
    remainingCount: 1,
  },
  {
    userId: 5,
    userName: '최지영',
    lastPaymentDate: '2024. 01. 25',
    remainingCount: 1,
  },
];

export default function Students() {
  const { limited, rest } = sliceItems(students, 4);

  return (
    <div className='mt-8 mb-2 w-full relative px-4'>
      <Title title='수강생들이에요!' subTitle='오늘 방문하는' />
      <GoTo title='수강생 전체보기' href='' />
      <ul className='w-full flex flex-wrap gap-2 mt-4'>
        {limited.map((student) => (
          <Student key={student.userId} {...student} />
        ))}
      </ul>
      <ExpandedList>
        {rest.map((student) => (
          <Student key={student.userId} {...student} />
        ))}
      </ExpandedList>
    </div>
  );
}
