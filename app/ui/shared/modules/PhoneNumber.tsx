import Image from 'next/image';
import { PropsWithChildren } from 'react';

const PhoneNumberBox = ({ children }: PropsWithChildren) => {
  return (
    <div className='text-grey700 flex gap-2 text-sm'>
      <Image
        src='/icon/ic-phone-18px.svg'
        alt='전화번호'
        width={18}
        height={18}
      />
      {children}
      <Image src='/icon/ic-copy-18px.svg' alt='복사' width={18} height={18} />
    </div>
  );
};

export default PhoneNumberBox;
