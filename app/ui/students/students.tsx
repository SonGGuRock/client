import Title from '../components/atoms/Title';
import GoTo from '../components/atoms/GoTo';
import UserItem, { UserItemProps } from '../components/modules/UserItem';

const students: UserItemProps[] = [
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

export default async function Students() {
  return (
    <div className='my-6 w-full relative'>
      <Title title='수강생 최근 작품' subTitle='오늘 방문하는' />
      <GoTo title='수강생 전체보기' href='' />
      <ul className='w-full flex flex-wrap gap-2'>
        {students.map((student) => (
          <UserItem {...student} />
        ))}
      </ul>
    </div>
  );
}
