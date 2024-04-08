import IconArrowRight from '@/app/shared/ui/atoms/icons/icon-arrow-right';
import FormInput from '@/app/shared/ui/modules/FormInput';
import AddressInput from '@/app/shared/ui/modules/address-input';
import Header from '@/app/shared/ui/modules/header';
import Image from 'next/image';
import Link from 'next/link';

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

        <Link
          href='/workshops/1/settings'
          className='w-full text-grey700 text-sm font-bold flex justify-between'
        >
          운영 설정
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCreatePage;
