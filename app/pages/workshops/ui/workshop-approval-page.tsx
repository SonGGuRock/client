'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Divider from '@/app/shared/atoms/Divider';
import Header from '@/app/shared/modules/header';
import {
  ApprovalMemberList,
  MemberType,
} from '@/app/widget/workshops/api/type';
import WorkshopApprovalList from '@/app/widget/workshops/ui/workshop-approval-list';
import WorkshopPendingList from '@/app/widget/workshops/ui/workshop-pending-list';
import { usePathname } from 'next/navigation';

const WorkshopApprovalPage = ({}) => {
  const path = usePathname();

  const memberType: MemberType = path.includes('teacher')
    ? { value: 'teachers', title: '선생님' }
    : { value: 'students', title: '수강생' };

  const { data: members } = useQueryWithCredentials<ApprovalMemberList>(
    `workshops/approval/${memberType.value}`
  );

  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>{memberType.title} 관리</Header.Title>
          </div>
        </div>
      </Header>
      <div className='pt-6 px-4'>
        {members && members.approved && (
          <WorkshopApprovalList
            members={members.approved}
            type={memberType}
          />
        )}
      </div>
      <Divider />
      <div className='px-4'>
        {members && members.pending && (
          <WorkshopPendingList
            members={members.pending}
            type={memberType}
          />
        )}
      </div>
    </div>
  );
};

export default WorkshopApprovalPage;
