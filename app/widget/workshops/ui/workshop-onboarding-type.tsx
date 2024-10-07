import Link from 'next/link';
import WorkshopOnboardingCreate from './workshop-onboarding-create';
import WorkshopOnboardingSelect from './workshop-onboarding-select';

const WorkshopOnboardingType = () => {
  return (
    <div className='flex flex-wrap gap-4 mt-24 w-full'>
      <Link href='/workshops/select' className='w-full'>
        <WorkshopOnboardingSelect />
      </Link>
      <Link href='/workshops/create' className='w-full'>
        <WorkshopOnboardingCreate />
      </Link>
    </div>
  );
};

export default WorkshopOnboardingType;
