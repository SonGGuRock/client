'use client';

import CheckBox from '@/app/shared/atoms/CheckBox';
import { ClassNamesProps } from '../../widget/reservations/ui/class-time-picker';
import { PropsWithChildren } from 'react';

interface Props extends ClassNamesProps, PropsWithChildren {
  isChecked?: boolean;
  onCheck: () => void;
}

const CheckListItem = ({
  children,
  isChecked = false,
  onCheck,
  classNames,
}: Props) => {
  return (
    <div
      className={` flex gap-3 py-4 border-t border-grey100 last:border-b ${classNames}`}
    >
      <CheckBox isChecked={isChecked} onCheck={onCheck} style='grey' />
      <span className='w-full block'>{children}</span>
    </div>
  );
};

export default CheckListItem;
