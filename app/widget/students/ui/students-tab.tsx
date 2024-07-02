'use client';

import useToggle from '@/app/shared/lib/useToggle';
import TabLayout from '../../../shared/modules/tab/TabLayout';
import TabMenu from '../../../shared/modules/tab/TabMenu';
import { StudentSearchParams } from '../lib/useSearchByInitial';

interface StudentsTabProps {
  onSwitch: (newParams: Partial<StudentSearchParams>) => void;
  activeStudentsCount?: number;
  completedStudentsCount?: number;
}

const StudentsTab = ({
  onSwitch,
  activeStudentsCount,
  completedStudentsCount,
}: StudentsTabProps) => {
  const { open: off, toggle } = useToggle();

  const handleClickTab = () => {
    toggle();
    onSwitch({ active: !off ? 0 : 1 });
  };

  return (
    <TabLayout>
      <TabMenu active={!off} onClick={handleClickTab}>
        수강중 {activeStudentsCount ?? ''}
      </TabMenu>
      <TabMenu active={off} onClick={handleClickTab}>
        종료 {completedStudentsCount ?? ''}
      </TabMenu>
    </TabLayout>
  );
};

export default StudentsTab;
