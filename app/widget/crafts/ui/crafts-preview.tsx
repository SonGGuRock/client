import GoTo from '../../../shared/atoms/GoTo';
import Title from '../../../shared/atoms/Title';
import UserCrafts, { UserCraftsProps } from './user-crafts';

// user별로 craft 최신 6개만 보내주도록
// status 데이터 구조

// const usersCrafts: UserCraftsProps[] = [
//   {
//     userId: 1,
//     userName: '최지영',
//     crafts: [
//       {
//         workstep: '재벌',
//         imgUrl: '',
//         craftName: '팔각 화병',
//         craftId: 1,
//         created_at: '2024-01-24',
//       },
//       {
//         workstep: '초벌',
//         imgUrl: '',
//         craftName: '손잡이가 큰 머그',
//         craftId: 2,
//         created_at: '2024-01-24',
//       },
//       {
//         workstep: '정형',
//         imgUrl: '',
//         craftName: '작은 면기',
//         craftId: 3,
//         created_at: '2024-01-24',
//       },
//     ],
//   },
//   {
//     userId: 2,
//     userName: '최지영',
//     crafts: [
//       {
//         workstep: '재벌',
//         imgUrl: '',
//         craftName: '팔각 화병',
//         craftId: 5,
//         created_at: '2024-01-24',
//       },
//     ],
//   },
// ];

export default function CraftsPreview() {
  return (
    <div className='relative px-4 mt-6 pb-10'>
      <Title subTitle='오늘 방문하는'>수강생의 최근 작품</Title>
      <GoTo href='#' title='작품 전체보기' />
      {/* {usersCrafts.map((userCraft) => (
        <UserCrafts key={userCraft.userId} {...userCraft} />
      ))} */}
    </div>
  );
}
