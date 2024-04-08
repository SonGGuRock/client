import { WORK_STEP } from '@/app/shared/ui/atoms/work-step-label';
import Header from '@/app/shared/ui/modules/header';
import WorkStepIcon from '@/app/shared/ui/modules/workstep-icon';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';

const WorkshopSettingsPage = () => {
  return (
    <div className='pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>운영 설정</Header.Title>
          </div>
          <Header.Button size='small'>완료</Header.Button>
        </div>
      </Header>
      <div>
        <SettingMenu className='py-6'>
          <SettingMenu.Activation>물레 사용</SettingMenu.Activation>
        </SettingMenu>

        <SettingMenu className='py-6'>
          <SettingMenu.LinkText href='' linkText='2명'>
            물레 최대 인원
          </SettingMenu.LinkText>
          <SettingMenu.LinkText href='' linkText='2명'>
            핸드빌딩 최대 인원
          </SettingMenu.LinkText>
        </SettingMenu>

        <SettingMenu className='py-6'>
          공방 운영 시간대
          <li className='flex gap-2 flex-wrap'>
            <SettingMenu.ClassTime>09~12시</SettingMenu.ClassTime>
            <SettingMenu.ClassTime>12~15시</SettingMenu.ClassTime>
            <SettingMenu.ClassTime>15~18시</SettingMenu.ClassTime>
            <SettingMenu.ClassTime>18~21시</SettingMenu.ClassTime>
          </li>
        </SettingMenu>

        <SettingMenu className='py-6'>
          <SettingMenu.LinkText href='' linkText='10일~1일 전'>
            예약 가능 기간
          </SettingMenu.LinkText>
          <SettingMenu.LinkText href='' linkText='최소 2일 전'>
            취소 가능 기간
          </SettingMenu.LinkText>
        </SettingMenu>

        <SettingMenu className='py-6'>
          <p className='flex gap-2 items-center'>
            <span>작업 상태 설정</span>
            <span className='text-grey500 text-xs'>
              최소 2개를 선택해주세요
            </span>
          </p>
          {WORK_STEP.map((step) => (
            <SettingMenu.Activation key={step.en} className='opacity-60'>
              <WorkStepIcon step={step.en} />
              {step.ko}
            </SettingMenu.Activation>
          ))}
        </SettingMenu>
      </div>
    </div>
  );
};

export default WorkshopSettingsPage;
