import MemberTypeCard from '@/app/widget/signup/ui/member-type-card';

const SignupPage = () => {
  return (
    <div className='py-[124px] px-4'>
      <p className='font-bold text-xl text-grey900 mb-14'>
        손꾸락이 처음이신가요?
        <br /> 가입 유형을 선택해주세요
      </p>

      <MemberTypeCard />
    </div>
  );
};

export default SignupPage;
