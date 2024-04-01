import Thumbnail from '../../shared/ui/atoms/Thumbnail';
import PhoneNumberBox from '../../shared/ui/modules/phone-number/PhoneNumber';

const StudentInfo = () => {
  return (
    <div className='pb-8 px-4'>
      <div className='grid justify-items-center pt-4 pb-8'>
        <Thumbnail id={1} size='large' />
        <p className='pt-2 pb-8 text-center'>한선민</p>
        <PhoneNumberBox>010-1234-5678</PhoneNumberBox>
      </div>

      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <div className='bg-grey50 p-3 rounded-lg'>
          <label className='text-xs text-grey400'>등록일</label>
          <p className='text-sm text-grey800'>2024년 1월 24일</p>
        </div>
        <div className='bg-grey50 p-3 rounded-lg'>
          <label className='text-xs text-grey400'>등록일</label>
          <p className='text-sm text-grey800'>2024년 1월 24일</p>
        </div>
        <div className='bg-grey50 p-3 rounded-lg'>
          <label className='text-xs text-grey400'>등록일</label>
          <p className='text-sm text-grey800'>2024년 1월 24일</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
