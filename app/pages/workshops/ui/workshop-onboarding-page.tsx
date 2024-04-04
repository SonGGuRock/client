import Title from '@/app/shared/ui/atoms/Title';
import WorkshopOnboardingType from '@/app/widget/workshops/ui/workshop-onboarding-type';

const WorkshopOnboardingPage = () => {
  return (
    <div className='px-4 pt-[124px] '>
      <Title size='large'>
        OOO님 안녕하세요! <br />
        공방 운영을 함께 할 준비가 되셨나요?
      </Title>
      <WorkshopOnboardingType />
    </div>
  );
};

export default WorkshopOnboardingPage;
