import Title from '@/app/shared/ui/atoms/Title';
import Button from '@/app/shared/ui/atoms/button/Button';
import FormInput from '@/app/shared/ui/modules/FormInput';
import Header from '@/app/shared/ui/modules/header';

const ResetPasswordPage = () => {
  return (
    <div>
      <div className='pt-[77px] flex gap-10 flex-wrap'>
        <Title size='large'>가입한 이메일 주소를 입력해주세요</Title>
        <FormInput lableText='이메일' inputPlaceholder='id@ggurak.com' />
      </div>
      <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button size='large' disabled>
          이메일 인증하기
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
