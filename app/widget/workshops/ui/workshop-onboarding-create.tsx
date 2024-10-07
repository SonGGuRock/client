import Image from 'next/image';

const WorkshopOnboardingCreate = () => {
  return (
    <div className='flex rounded-lg bg-grey50 px-4 py-5 gap-3 w-full'>
      <Image
        src='/img/workshops-create.png'
        alt='등록 이미지'
        width={40}
        height={40}
      />
      <div className='flex flex-wrap'>
        <p className='w-full text-sm'>등록된 공방이 없다면</p>
        <p className='w-full text-base font-bold'>공방 등록하러 가기</p>
      </div>
    </div>
  );
};

export default WorkshopOnboardingCreate;
