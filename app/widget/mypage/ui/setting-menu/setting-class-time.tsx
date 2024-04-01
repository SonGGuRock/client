import Image from 'next/image';
import { PropsWithChildren } from 'react';

const SettingClassTime = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative py-3 bg-grey50 rounded-lg flex w-full justify-center gap-1 items-center'>
      <Image
        src='/icon/ic-edit_24px.svg'
        alt='수정 아이콘'
        width={18}
        height={18}
      />
      <span className='text-grey700 text-sm'>{children}</span>
      <Image
        className='absolute right-3 top-3'
        src='/icon/ic-close-circle-18px.svg'
        alt='삭제 아이콘'
        width={18}
        height={18}
      />
    </div>
  );
};

export default SettingClassTime;
