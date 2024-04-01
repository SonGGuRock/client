import Title from '@/app/shared/ui/atoms/Title';
import BottomBar from '@/app/shared/ui/modules/BottomBar';
import MemberInfo from '@/app/widget/mypage/ui/member-info';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';
import WorkShopInfo from '@/app/widget/mypage/ui/workshop-info';

const MyPage = () => {
  return (
    <div className='pt-3 pb-20'>
      <div className='px-4'>
        <Title size='large'>마이페이지</Title>

        <div className='mt-6'>
          <MemberInfo />
        </div>

        <WorkShopInfo
          id={1}
          name='손꾸락 공방'
          address='경기도 수원시 팔달구 성문로 45'
          phone_number='010=1234=5678'
        />
      </div>
      <SettingMenu className='py-4'>
        <SettingMenu.Label>나의 공방</SettingMenu.Label>
        <SettingMenu.Link href='/workshop/1'>공방 정보 설정</SettingMenu.Link>
        <SettingMenu.Link href='/workshop/1/settings'>
          운영 설정
        </SettingMenu.Link>
        <SettingMenu.Activation>오늘의 할일 사용</SettingMenu.Activation>
        <SettingMenu.Link href='/workshop/1'>등록 관리</SettingMenu.Link>
      </SettingMenu>

      <SettingMenu className='py-4'>
        <SettingMenu.Label>알림</SettingMenu.Label>
        <SettingMenu.Link href='/workshop/1'>알림 설정</SettingMenu.Link>
      </SettingMenu>

      <SettingMenu className='py-4'>
        <SettingMenu.Label>이용 안내</SettingMenu.Label>
        <SettingMenu.Link href='/workshop/1'>손꾸락 가이드</SettingMenu.Link>
        <SettingMenu.Link href='/workshop/1'>약관 및 정책</SettingMenu.Link>
      </SettingMenu>

      <SettingMenu className='py-4'>
        <SettingMenu.Button>로그아웃</SettingMenu.Button>
        <SettingMenu.Button>탈퇴하기</SettingMenu.Button>
      </SettingMenu>
      <BottomBar />
    </div>
  );
};

export default MyPage;
