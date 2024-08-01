import Header from '@/app/shared/modules/header';
import WithdrawalReasonList from '@/app/widget/members/ui/withdrawal-reason-list';

const MemberWithdrawalPage = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>서비스 탈퇴</Header.Title>
        </div>
      </Header>
      <p className='font-bold text-xl text-grey900 mt-16 mb-2'>
        손꾸락을 <span className='text-error'>탈퇴</span>하시나요?
      </p>
      <p className='text-grey500 text-base'>
        탈퇴하시는 이유를 알려주시면 더 좋은 서비스를 만드는 데 도움이 돼요
      </p>

      <WithdrawalReasonList />
    </div>
  );
};

export default MemberWithdrawalPage;
