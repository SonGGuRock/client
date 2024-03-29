import { PropsWithChildren } from 'react';

const LastPaymentDate = ({ children }: PropsWithChildren) => {
  return (
    <p className='text-xs text-grey500'>
      지난 결제일
      <strong className='text-grey600'>{children}</strong>
    </p>
  );
};

export default LastPaymentDate;
