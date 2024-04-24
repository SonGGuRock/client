import Header from '@/app/shared/modules/header';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';

const WorkshopSettingPage = () => {
  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>공방 관리</Header.Title>
          </div>
        </div>
      </Header>
      <div>
        <SettingMenu className='py-6'>
          <SettingMenu.Label>나의 공방</SettingMenu.Label>
          <SettingMenu.Link href='/workshops/1'>
            공방 정보 설정
          </SettingMenu.Link>
          <SettingMenu.Link href='/workshops/1/settings/operation'>
            공방 운영 설정
          </SettingMenu.Link>
          <SettingMenu.Link href=''>알림/할일 설정</SettingMenu.Link>
        </SettingMenu>

        <SettingMenu className='py-6'>
          <SettingMenu.Label>등록 관리</SettingMenu.Label>
          <SettingMenu.Link href=''>선생님 관리</SettingMenu.Link>
          <SettingMenu.Link href=''>수강생 관리</SettingMenu.Link>
        </SettingMenu>
      </div>
    </div>
  );
};

export default WorkshopSettingPage;
