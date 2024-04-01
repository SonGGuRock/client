import GoTo from '../../shared/ui/atoms/GoTo';
import Title from '../../shared/ui/atoms/Title';
import UserCrafts, { UserCraftsProps } from './UserCrafts';

// user별로 craft 최신 6개만 보내주도록
// status 데이터 구조

const usersCrafts: UserCraftsProps[] = [
  {
    userId: 1,
    userName: '최지영',
    crafts: [
      {
        status: '재벌',
        imgUrl: '',
        craftName: '팔각 화병',
        craftId: 1,
        created_at: '2024-01-24',
      },
      {
        status: '초벌',
        imgUrl: '',
        craftName: '손잡이가 큰 머그',
        craftId: 2,
        created_at: '2024-01-24',
      },
      {
        status: '정형',
        imgUrl: '',
        craftName: '작은 면기',
        craftId: 3,
        created_at: '2024-01-24',
      },
    ],
  },
  {
    userId: 2,
    userName: '최지영',
    crafts: [
      {
        status: '재벌',
        imgUrl: '',
        craftName: '팔각 화병',
        craftId: 5,
        created_at: '2024-01-24',
      },
    ],
  },
];

export default function Gallery() {
  return (
    <div className='relative px-4 mt-6 pb-10'>
      <Title title='수강생의 최근 작품' subTitle='오늘 방문하는' />
      <GoTo href='#' title='갤러리 전체보기' />
      {usersCrafts.map((userCraft) => (
        <UserCrafts {...userCraft} />
      ))}
    </div>
  );
}
