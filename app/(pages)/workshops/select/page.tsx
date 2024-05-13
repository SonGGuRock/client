import Title from '@/app/shared/atoms/Title';
import SearchBorder from '@/app/shared/modules/search-border';
import WorkShopInfo from '@/app/widget/mypage/ui/workshop-info';
import WorkshopOnboardingCreate from '@/app/widget/workshops/ui/workshop-onboarding-create';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='pt-20'>
      <Title size='large'>
        이미 등록된 공방이 있나요? <br />
        공방을 선택해주세요
      </Title>
      <SearchBorder />
      <WorkShopInfo
        id={1}
        name='손꾸락 공방'
        address='경기도 수원시 팔달구 성문로 45'
        phone_number='010=1234=5678'
      />

      <Link
        href='/workshops/create'
        className='w-full absolute left-0 bottom-9 px-4'
      >
        <WorkshopOnboardingCreate />
      </Link>
    </div>
  );
};

export default Page;
