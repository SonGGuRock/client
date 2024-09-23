'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import GoTo from '../../../shared/atoms/GoTo';
import Title from '../../../shared/atoms/Title';
import { TodayStudentCrafts } from '@/app/entities/crafts/types';
import TodayStudentCraftList from './today-student-craft-list';

export default function CraftsPreview() {
  const { data: todayStudentsCrafts } = useQueryWithCredentials<
    TodayStudentCrafts[]
  >('/crafts/students/today');
  if (!todayStudentsCrafts) return <div>loading</div>;
  return (
    <div className='relative px-4 mt-6 pb-10'>
      <Title subTitle='오늘 방문하는'>수강생의 최근 작품</Title>
      <GoTo href='#' title='작품 전체보기' />
      {todayStudentsCrafts.map((crafts) => (
        <TodayStudentCraftList key={crafts.id} {...crafts} />
      ))}
    </div>
  );
}
