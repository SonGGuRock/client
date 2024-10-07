import SettingMenu from '../../mypage/ui/setting-menu';
import { ApprovalMemberInfo, MemberType } from '../api/type';
import WorkshopMemberItem from './workshop-member-item';

export interface WorkshopApprovalListProps {
  members: ApprovalMemberInfo[];
  type: MemberType;
}

const WorkshopApprovalList = ({ members, type }: WorkshopApprovalListProps) => {
  return (
    <div className='mb-4'>
      <SettingMenu.Label>등록된 {type.title}</SettingMenu.Label>
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

export default WorkshopApprovalList;
