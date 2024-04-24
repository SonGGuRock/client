import Image from 'next/image';

const WorkshopOnboardingSelect = () => {
  return (
    <div className='flex rounded-lg bg-grey50 px-4 py-5 gap-3 w-full'>
      <Image
        src='/img/workshops-select.png'
        alt='선택 화살표 이미지'
        width={40}
        height={40}
      />
      <div className='flex flex-wrap'>
        <p className='w-full text-sm'>등록된 공방이 있다면</p>
        <p className='w-full text-base font-bold'>공방 선택하러 가기</p>
      </div>
    </div>
  );
};

export default WorkshopOnboardingSelect;
