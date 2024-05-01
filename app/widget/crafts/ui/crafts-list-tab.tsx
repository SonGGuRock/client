'use client';
import useToggle from '@/app/shared/lib/useToggle';
import TabLayout from '@/app/shared/modules/tab/TabLayout';
import TabMenu from '@/app/shared/modules/tab/TabMenu';

const CraftsListTab = () => {
  const { open: off, toggle } = useToggle();
  return (
    <TabLayout>
      <TabMenu active={!off} onClick={toggle}>
        작업별
      </TabMenu>
      <TabMenu active={off} onClick={toggle}>
        회원별
      </TabMenu>
    </TabLayout>
  );
};

export default CraftsListTab;
