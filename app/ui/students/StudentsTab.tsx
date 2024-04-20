'use client';

import useToggle from '@/app/shared/lib/useToggle';
import TabLayout from '../../shared/ui/modules/tab/TabLayout';
import TabMenu from '../../shared/ui/modules/tab/TabMenu';

const StudentsTab = () => {
  const { open: off, toggle } = useToggle();
  return (
    <TabLayout>
      <TabMenu active={!off} onClick={toggle}>
        수강중 8
      </TabMenu>
      <TabMenu active={off} onClick={toggle}>
        종료 5
      </TabMenu>
    </TabLayout>
  );
};

export default StudentsTab;
