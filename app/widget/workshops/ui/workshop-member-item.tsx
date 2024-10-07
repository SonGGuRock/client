import Thumbnail from '@/app/shared/atoms/Thumbnail';
import { ApprovalMemberInfo, MemberTypeValue } from '../api/type';
import Link from 'next/link';

interface WorkshopMemberItemProps {
  member: ApprovalMemberInfo;
  type: MemberTypeValue;
}

const WorkshopMemberItem = ({
  member: { id, profile_picture, name },
  type,
}: WorkshopMemberItemProps) => {
  return (
    <Link
      className='flex gap-4 items-center w-full min-h-10 py-3'
      href={`/workshops/approval/teachers/${id}`}
    >
      <Thumbnail
        id={id}
        imageUrl={profile_picture}
        type={type === 'teachers' ? 'teacher' : 'student'}
        size='small'
      />
      <span>{name}</span>
    </Link>
  );
};

export default WorkshopMemberItem;
