import Header from '@/app/shared/modules/header';
import { SettingMenuActivation } from '@/app/widget/mypage/ui/setting-menu/setting-menu-activation';

const WorkshopSettingEnvironmentPage = () => {
  return (
    <div className='pt-3'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>알림/할일 설정</Header.Title>
          </div>
        </div>
      </Header>

      <SettingMenuActivation classNames='p-4 border-b border-grey100'>
        오늘의 할 일 사용
      </SettingMenuActivation>
      <div className='w-full flex flex-wrap gap-2 pt-1'>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          예약 알림
        </SettingMenuActivation>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          할일 알림
        </SettingMenuActivation>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          작품 알림
        </SettingMenuActivation>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          공지 알림
        </SettingMenuActivation>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          수강관리 알림
        </SettingMenuActivation>
        <SettingMenuActivation classNames='w-full px-4 py-3'>
          등록승인 알림
        </SettingMenuActivation>
      </div>
    </div>
  );
};

export default WorkshopSettingEnvironmentPage;
