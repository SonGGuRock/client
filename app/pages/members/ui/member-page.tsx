import FormInput from '@/app/shared/modules/FormInput';
import FormDateSelect from '@/app/shared/modules/form-date-select';
import Header from '@/app/shared/modules/header';
import ProfilePictureEdit from '@/app/shared/modules/profile-picture-edit';

const MemberPage = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>내 정보 수정</Header.Title>
          </div>
          <Header.Button size='small'>완료</Header.Button>
        </div>
      </Header>
      <div className='w-full flex justify-center items center my-8'>
        <ProfilePictureEdit id={1} name='최지영' />
      </div>

      <div className='flex gap-6 flex-wrap pb-12'>
        <FormInput
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
        />
        <FormDateSelect labelText='생년월일' />
        <FormInput lableText='이메일' inputPlaceholder='' />
        <FormInput lableText='전화번호' inputPlaceholder='- 구분없이 입력' />
        <FormDateSelect labelText='가입일' />
      </div>
    </div>
  );
};

export default MemberPage;
