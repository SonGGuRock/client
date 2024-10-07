'use client';

import Title from '@/app/shared/atoms/Title';
import SearchBorder from '@/app/shared/modules/search-border';
import WorkShopInfo from '@/app/widget/mypage/ui/my-workshop-info';
import useTeacherRegister from '@/app/widget/workshops/api/useTeacherRegister';
import useWorkshopSearch from '@/app/widget/workshops/api/useWorkshopSearch';
import WorkshopOnboardingCreate from '@/app/widget/workshops/ui/workshop-onboarding-create';
import Link from 'next/link';

const WorkshopSelectPage = () => {
  const { data, refetch } = useWorkshopSearch({ name: '' });
  const { mutate } = useTeacherRegister();

  const handleClickSearch = (keyword: string) => {
    refetch({ name: keyword });
  };

  const handleClickWorkshop = (workshopId: number) => {
    mutate(workshopId);
  };
  return (
    <div className='pt-20'>
      <Title size='large'>
        이미 등록된 공방이 있나요? <br />
        공방을 선택해주세요
      </Title>
      <SearchBorder onClickSearch={handleClickSearch} />
      {data?.map((workshop) => (
        <WorkShopInfo
          key={workshop.id}
          workshop={workshop}
          onClick={() => handleClickWorkshop(workshop.id)}
        />
      ))}

      <Link href='/workshops/create' className='w-full px-4'>
        <WorkshopOnboardingCreate />
      </Link>
    </div>
  );
};

export default WorkshopSelectPage;
