import Header from '@/app/shared/modules/header';
import ChangePasswordForm from '@/app/widget/members/ui/password-change-form';

const Page = () => {
  return (
    <div>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>비밀번호 변경</Header.Title>
        </div>
      </Header>
      <ChangePasswordForm />
    </div>
  );
};

export default Page;
