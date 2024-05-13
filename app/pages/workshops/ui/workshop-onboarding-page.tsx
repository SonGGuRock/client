'use client';

import Title from '@/app/shared/atoms/Title';
import WorkshopOnboardingType from '@/app/widget/workshops/ui/workshop-onboarding-type';
import useWorkshopRegistered from '../../../widget/workshops/api/useWorkshopRegistered';
import WorkshopList from '@/app/widget/workshops/ui/workshop-list';

const WorkshopOnboardingPage = () => {
  const { data } = useWorkshopRegistered();
  return (
    <div className='px-4 pt-[124px] '>
      <Title size='large'>이용할 공방을 선택해주세요</Title>
      {data && <WorkshopList workshopList={data} />}
      <WorkshopOnboardingType />
    </div>
  );
};

export default WorkshopOnboardingPage;
