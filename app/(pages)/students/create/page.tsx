import Button from '@/app/ui/shared/atoms/button/Button';
import FormInput from '@/app/ui/shared/modules/FormInput';
import FormSelect from '@/app/ui/shared/modules/FormSelect';
import ProfileDefault from '@/app/ui/shared/modules/ProfileDefault';
import Header from '@/app/ui/shared/modules/header';

const Page = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title title='수강생 등록' />
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
        <FormSelect labelText='등록일' />
        <FormSelect labelText='결제일' />
        <FormInput lableText='메모' inputPlaceholder='(선택사항)' />
      </div>

      <Button text='등록 완료' size='large' disabled />
    </div>
  );
};

export default Page;
