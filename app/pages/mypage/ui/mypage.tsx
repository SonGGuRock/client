'use client';

import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import Title from '@/app/shared/atoms/Title';
import BottomBar from '@/app/shared/modules/BottomBar';
import LogoutButton from '@/app/widget/mypage/ui/logout-button';
import MemberInfo, {
  MypageMemberInfo,
} from '@/app/widget/mypage/ui/member-info';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';
import WithdrawalButton from '@/app/widget/mypage/ui/withdrawal-button';
import WorkShopInfo from '@/app/widget/mypage/ui/my-workshop-info';
import { Workshop } from '@/app/widget/workshops/api/type';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteAsync, getAsync } from '@/app/shared/api/fetch';
import { ISROUTEQUEST } from '@/app/shared/const';
import IconArrowRight from '@/app/shared/atoms/icons/icon-arrow-right';
import Cookies from 'js-cookie';

const MyPage = () => {
  const { data: my } = useQueryWithCredentials<{
    workshop: Workshop;
    member: MypageMemberInfo;
  }>('mypages');

  const router = useRouter();

  //TODO: admin 체크 로직 분리 필요
  const { data: isAdminFromCookies } = useQuery<{ isAdmin: string }>({
    queryKey: ['workshop', 'admin'],
    queryFn: () => getAsync(`api/workshops/admin`, ISROUTEQUEST),
  });

  const goToWorkshopAdminPage = () => {
    if (Boolean(isAdminFromCookies?.isAdmin) !== true) return;
    my?.workshop && router.push(`/workshops/${my.workshop.id}/settings`);
  };

  const { mutate } = useMutateWithCrendetials('workshops/teachers/inactive');
  const { mutate: inactivate } = useMutation({
    mutationFn: () => deleteAsync('api/workshops/admin', ISROUTEQUEST),
  });
  const goOutWorkshop = () => {
    mutate(
      {
        method: 'POST',
      },
      {
        onSuccess: () => {
          inactivate();
          router.push('/workshops');
        },
      }
    );
  };

  return (
    <div className='pt-3 pb-20'>
      <div className='px-4'>
        <Title size='large'>마이페이지</Title>

        <div className='mt-6 mb-4'>
          {my?.member && <MemberInfo myPageMember={my.member} />}
        </div>

        <div onClick={goToWorkshopAdminPage}>
          {my?.workshop && <WorkShopInfo workshop={my.workshop} />}
        </div>
        <div
          className='mt-4 mb-6 flex w-full justify-between items-center'
          onClick={goOutWorkshop}
        >
          <span className='text-sm text-grey500'>
            다른 공방을 관리하고 싶다면
          </span>
          <span className='w-fit flex'>
            공방 목록 가기 <IconArrowRight />
          </span>
        </div>
      </div>

      <SettingMenu className='py-4'>
        <SettingMenu.Label>이용 안내</SettingMenu.Label>
        <SettingMenu.Link href='/workshop/1'>손꾸락 가이드</SettingMenu.Link>
        <SettingMenu.Link href='/workshop/1'>약관 및 정책</SettingMenu.Link>
      </SettingMenu>

      <SettingMenu className='py-4'>
        <LogoutButton />
        <WithdrawalButton />
      </SettingMenu>
      <BottomBar />
    </div>
  );
};

export default MyPage;
