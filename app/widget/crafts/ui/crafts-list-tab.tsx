'use client';
import TabLayout from '@/app/shared/modules/tab/TabLayout';
import TabMenu from '@/app/shared/modules/tab/TabMenu';

interface CraftsListTabProps {
  isCraftFirstView: boolean;
  onSwap: () => void;
}

const CraftsListTab = ({ isCraftFirstView, onSwap }: CraftsListTabProps) => {
  return (
    <TabLayout>
      <TabMenu active={isCraftFirstView} onClick={onSwap}>
        작업별
      </TabMenu>
      <TabMenu active={!isCraftFirstView} onClick={onSwap}>
        회원별
      </TabMenu>
    </TabLayout>
  );
};

export default CraftsListTab;
