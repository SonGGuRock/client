'use client';

import FormInput from '@/app/shared/modules/FormInput';
import Header from '@/app/shared/modules/header';
import WorkshopProfilePicture from '@/app/widget/workshops/ui/workshop-profile-picture';

const WorkshopInfoPage = () => {
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>공방 정보 수정</Header.Title>
          </div>
          <Header.Button size='small'>완료</Header.Button>
        </div>
      </Header>
      <WorkshopProfilePicture onClick={() => {}} />

      <div className='flex gap-6 flex-wrap pb-12'>
        <FormInput lableText='공방 이름' value='손꾸락 공방' />
        <FormInput lableText='전화번호' value='010-1234-5678' />
        <FormInput
          lableText='공방 등록일'
          disabled={true}
          value='2024. 02. 24'
        />
      </div>
    </div>
  );
};

export default WorkshopInfoPage;
