import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';

const AuthenticationSuccessPage = () => {
  return (
    <div className='mt-20'>
      <Title size='large'>비밀번호 변경</Title>
      <div className='mt-10 flex flex-wrap gap-8'>
        <FormInput
          lableText='새 비밀번호'
          inputPlaceholder='새 비밀번호를 입력해주세요'
        />
        <FormInput
          lableText='새 비밀번호 확인'
          inputPlaceholder='새 비밀번호를 한번 더 입력해주세요'
        />
      </div>
      <div className='absolute bottom-9 left-0 w-full px-4'>
        <Button size='large' disabled>
          변경 완료
        </Button>
      </div>
    </div>
  );
};

export default AuthenticationSuccessPage;
