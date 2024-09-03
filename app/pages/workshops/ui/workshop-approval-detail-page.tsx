'use client';

import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import useCreate from '@/app/shared/api/useCreate';
import Button from '@/app/shared/atoms/button/Button';
import Header from '@/app/shared/modules/header';
import { ApprovalMemberList } from '@/app/widget/workshops/api/type';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const WorkshopApprovalDetailPage = () => {
  const params = useParams();
  const id = params['id'];
  const type = params['type'];

  const [approvalStatus, setApprovalStatus] = useState<
    'approval' | 'rejection'
  >();
  const memberType =
    type === 'teachers'
      ? { value: type, title: '선생님' }
      : { value: type, title: '수강생' };

  const { data: members } = useQueryWithCredentials<ApprovalMemberList>(
    `workshops/approval/${memberType.value}`
  );

  const { post } = useCreate<undefined>({
    path: `workshops/approval/${memberType.value}/${id}`,
    revalidate: false,
    params: { type: approvalStatus! },
  });

  const pendingMember = members?.pending.filter(
    (member) => member.id === Number(id)
  );

  const handleApproval = (type: 'approval' | 'rejection') => {
    // post(undefined,);
    setApprovalStatus(type);
  };

  useEffect(() => {
    if (!approvalStatus) {
      return;
    }
    post(undefined);
  }, [approvalStatus]);

  return (
    <div className='relative'>
      <Header className='px-4 fixed top-0'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
          </div>
        </div>
      </Header>
      <div className='px-4 pt-[120px] min-h-dvh'>
        <div className=''>
          <Image
            src='/img/ic-add-circle_brown.png'
            alt='완료'
            width={60}
            height={60}
            className='block text-center mx-auto'
          />
          <p className='text-lg font-bold text-grey900 text-center mt-4'>
            {`새로운 ${memberType.title}`} <br />
            등록신청이 있어요
          </p>

          <div className='border-t mt-12 border-b py-8 border-grey100 flex flex-wrap w-full gap-4'>
            {pendingMember?.map((member) => (
              <div key={member.id} className='w-full flex flex-wrap gap-4'>
                <div className='flex w-full justify-between'>
                  <span className='text-grey700 text-sm'>이름</span>
                  <span className='text-grey900 text-sm'>{member.name}</span>
                </div>
                <div className='flex w-full justify-between'>
                  <span className='text-grey700 text-sm'>전화번호</span>
                  <span className='text-grey900 text-sm'>
                    {member.phone_number}
                  </span>
                </div>
                <div className='flex w-full justify-between'>
                  <span className='text-grey700 text-sm'>신청일</span>
                  <span className='text-grey900 text-sm'>
                    {member.submit_date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full px-4 flex gap-4 fixed bottom-8 left-0'>
          <Button
            size='large'
            type='button'
            style='secondary'
            onClick={() => handleApproval('rejection')}
          >
            거절
          </Button>
          <Button
            size='large'
            type='button'
            style='primary'
            onClick={() => {
              handleApproval('approval');
            }}
          >
            승인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopApprovalDetailPage;
