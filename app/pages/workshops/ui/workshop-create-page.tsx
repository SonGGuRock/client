import FormInput from '@/app/shared/modules/FormInput';
import AddressInput from '@/app/shared/modules/address-input';
import Header from '@/app/shared/modules/header';
import Image from 'next/image';

const WorkshopCreatePage = () => {
  return (
    <div className='px-4'>
      <Header>
        <div className='flex gap-2 items-center'>
          <Header.Back />
          <Header.Title>공방 등록</Header.Title>
        </div>
        <Header.Button size='small' disabled>
          등록
        </Header.Button>
      </Header>
      <div className='pt-4 pb-6'>
        <Image
          src='/img/workshops-add-btn.png'
          alt='공방 등록 버튼'
          width={343}
          height={136}
          className='w-full'
        />
      </div>
      <div className='flex flex-wrap gap-6'>
        <FormInput
          lableText='공방 이름'
          inputPlaceholder='공방의 이름을 입력해주세요'
        />
        <AddressInput />
        <FormInput
          lableText='전화번호'
          inputPlaceholder='공방의 대표 전화번호를 입력해주세요'
        />
      </div>
    </div>
  );
};

export default WorkshopCreatePage;
