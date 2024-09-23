'use client';

import TabLayout from '../../../shared/modules/tab/TabLayout';
import TabMenu from '../../../shared/modules/tab/TabMenu';

interface StudentTabProps {
  showCrafts: boolean;
  onSwap: () => void;
}

const StudentTab = ({ showCrafts, onSwap }: StudentTabProps) => {
  return (
    <div className='border-t-8 border-grey50 pt-2'>
      <TabLayout>
        <TabMenu active={!showCrafts} onClick={onSwap}>
          예약 내역
        </TabMenu>
        <TabMenu active={showCrafts} onClick={onSwap}>
          작품
        </TabMenu>
      </TabLayout>
    </div>
  );
};

export default StudentTab;
