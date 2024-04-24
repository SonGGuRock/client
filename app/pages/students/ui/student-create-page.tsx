import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import FormDateSelect from '@/app/shared/modules/form-date-select';
import ProfileDefault from '@/app/shared/modules/ProfileDefault';
import Header from '@/app/shared/modules/header';

const StudentCreatePage = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>수강생 등록</Header.Title>
        </div>
      </Header>

      <div className='flex justify-center items-center w-full py-8'>
        <ProfileDefault />
      </div>

      <div className='flex gap-6 flex-wrap pb-12'>
        <FormInput
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
        />
        <FormInput lableText='전화번호' inputPlaceholder='- 구분없이 입력' />
        <FormDateSelect labelText='등록일' />
        <FormDateSelect labelText='결제일' />
        <FormInput lableText='메모' inputPlaceholder='(선택사항)' />
      </div>

      <Button size='large' disabled>
        등록 완료
      </Button>
    </div>
  );
};

export default StudentCreatePage;
