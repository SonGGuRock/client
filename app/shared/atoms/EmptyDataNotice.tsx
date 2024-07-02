import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface EmptyDataNoticeProps extends ClassNamesProps, PropsWithChildren {}

const EmptyDataNotice = ({ children, classNames }: EmptyDataNoticeProps) => {
  return (
    <div
      className={`flex w-full pt-16 justify-center text-sm text-grey700 ${classNames}`}
    >
      {children}
    </div>
  );
};

export default EmptyDataNotice;
