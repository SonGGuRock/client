'use client';

import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import Header from '@/app/shared/modules/header';
import { MemberMutateRequest } from '@/app/widget/members/lib/type';
import MemberForm from '@/app/widget/members/ui/member-form';
import PasswordResetTrigger from '@/app/widget/members/ui/password-change-trigger';
import { MypageMemberInfo } from '@/app/widget/mypage/ui/member-info';
import { Workshop } from '@/app/widget/workshops/api/type';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

const MemberEditPage = () => {
  const path = usePathname();
  const memberId = path.split('/')[2];
  const { data } = useQueryWithCredentials<{
    workshop: Workshop;
    member: MypageMemberInfo;
  }>('mypages');
  const { mutate } = useMutateWithCrendetials(`members/${memberId}`);
  const queryClient = useQueryClient();
  const updateMember = (body: MemberMutateRequest) =>
    mutate(
      {
        method: 'PUT',
        body,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey.some((key) => {
                return (
                  Array.isArray(key) && key.includes('mypages' || 'members')
                );
              });
            },
          });
          window.location.href = '/mypage';
        },
      }
    );
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>내 정보 수정</Header.Title>
          </div>
        </div>
      </Header>
      {data && data.member && (
        <MemberForm onSubmit={updateMember} initialData={data.member} />
      )}
      <PasswordResetTrigger />
      {/* <p className='text-error text-base font-medium'>공방 나가기</p> */}
    </div>
  );
};

export default MemberEditPage;
