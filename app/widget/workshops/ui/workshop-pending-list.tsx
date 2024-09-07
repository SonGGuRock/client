import SettingMenu from '../../mypage/ui/setting-menu';
import { WorkshopApprovalListProps } from './workshop-approval-list';
import WorkshopMemberItem from './workshop-member-item';

const WorkshopPendingList = ({ members, type }: WorkshopApprovalListProps) => {
  return (
    <div className='mt-6  '>
      <SettingMenu.Label>대기 중인 {type.title}</SettingMenu.Label>
      <div className='divide-y divde-grey100 my-4'>
        {members.map((member) => (
          <WorkshopMemberItem
            key={member.id}
            member={member}
            type={type.value}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopPendingList;
