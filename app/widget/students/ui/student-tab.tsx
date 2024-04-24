'use client';

import useToggle from '@/app/shared/lib/useToggle';
import TabLayout from '../../../shared/modules/tab/TabLayout';
import TabMenu from '../../../shared/modules/tab/TabMenu';

const StudentTab = () => {
  const { open: isDisabled, toggle } = useToggle();
  return (
    <div className='border-t-8 border-grey50 pt-2'>
      <TabLayout>
        <TabMenu active={!isDisabled} onClick={toggle}>
          예약 내역
        </TabMenu>
        <TabMenu active={isDisabled} onClick={toggle}>
          작품
        </TabMenu>
      </TabLayout>
    </div>
  );
};

export default StudentTab;
