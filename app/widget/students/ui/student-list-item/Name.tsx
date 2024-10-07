import { PropsWithChildren } from 'react';

const Name = ({ children }: PropsWithChildren) => {
  return <p className='text-sm'>{children}</p>;
};

export default Name;
