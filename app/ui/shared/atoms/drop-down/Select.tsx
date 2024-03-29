import { PropsWithChildren } from 'react';

export const Select = ({ children }: PropsWithChildren) => {
  return (
    <select className='text-grey500 text-sm text-right'>{children}</select>
  );
};
