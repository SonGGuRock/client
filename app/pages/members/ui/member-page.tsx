import Button from '@/app/shared/atoms/button/Button';
import FormInput from '@/app/shared/modules/FormInput';
import FormDatePicker from '@/app/shared/modules/form-date-input';
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

      <div className='flex gap-6 flex-wrap pb-6'>
        <FormInput
          lableText='이름'
          inputPlaceholder='이름(실명)을 입력해주세요'
        />
        <FormDatePicker labelText='생년월일' />
        <FormInput lableText='이메일' inputPlaceholder='' />
        <FormInput lableText='전화번호' inputPlaceholder='- 구분없이 입력' />
        <div className='relative w-full'>
          <FormInput lableText='비밀번호' inputPlaceholder='********' />
          <Button size='small' className='absolute bottom-2 right-0'>
            변경
          </Button>
        </div>
        {/* <FormDateSelect labelText='가입일' /> */}
      </div>
      <p className='text-error text-base font-medium'>공방 나가기</p>
    </div>
  );
};

export default MemberPage;
