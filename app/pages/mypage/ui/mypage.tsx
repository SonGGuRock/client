import Title from '@/app/shared/atoms/Title';
import BottomBar from '@/app/shared/modules/BottomBar';
import LogoutButton from '@/app/widget/mypage/ui/logout-button';
import MemberInfo from '@/app/widget/mypage/ui/member-info';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';
import WithdrawalButton from '@/app/widget/mypage/ui/withdrawal-button';

const MyPage = () => {
  return (
    <div className='pt-3 pb-20'>
      <div className='px-4'>
        <Title size='large'>마이페이지</Title>

        <div className='mt-6'>
          <MemberInfo />
        </div>

        {/* <WorkShopInfo
          href='/workshops/1/settings'
          id={1}
          name='손꾸락 공방'
          address='경기도 수원시 팔달구 성문로 45'
          phone_number='010=1234=5678'
        /> */}
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
