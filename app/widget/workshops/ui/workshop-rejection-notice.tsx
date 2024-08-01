'use client';

import useToggle from '@/app/shared/lib/useToggle';
import WorkshopList from './workshop-list';
import { Workshop } from '../api/type';
import IconArrowDown from '@/app/shared/atoms/icons/icon-arrow-down';

interface RejectionNoticeProps {
  workshopList: Workshop[];
}

const RejectionNotice = ({ workshopList }: RejectionNoticeProps) => {
  const { open, toggle } = useToggle();
  return (
    <div>
      <span
        className='flex justify-between w-full bg-error text-white rounded-lg px-3 py-2 '
        onClick={toggle}
      >
        거절된 공방이 있어요
        <IconArrowDown classNames={`filter-white ${open && 'rotate-180'}`} />
      </span>
      {open && <WorkshopList workshopList={workshopList} status='rejection' />}
    </div>
  );
};
export default RejectionNotice;
