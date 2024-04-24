import IconCloseCircle from '@/app/shared/atoms/icons/icon-close-circle';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import WorkStepLabel, { WORK_STEP } from '@/app/shared/atoms/work-step-label';
import Header from '@/app/shared/modules/header';
import WorkStepIcon from '@/app/shared/modules/workstep-icon';
import SettingMenu from '@/app/widget/mypage/ui/setting-menu';

const WorkshopSettingOperationPage = () => {
  return (
    <div className='pt-3 pb-10'>
      <Header className='px-4'>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>공방 운영 설정</Header.Title>
          </div>
          <Header.Button size='small'>수정</Header.Button>
        </div>
      </Header>
      <div>
        <SettingMenu className='py-6'>
          <SettingMenu.Activation>물레 사용</SettingMenu.Activation>
        </SettingMenu>

        <SettingMenu className='py-6'>
          <SettingMenu.LabelLayout label='물레 최대 인원'>
            <SettingMenu.Input value={2} isAutofocus={true} />
            <SettingMenu.Subtext>명</SettingMenu.Subtext>
          </SettingMenu.LabelLayout>
          <SettingMenu.LabelLayout label='물레 최대 인원'>
            <SettingMenu.Input value={5} />
            <SettingMenu.Subtext>명</SettingMenu.Subtext>
          </SettingMenu.LabelLayout>
        </SettingMenu>

        <SettingMenu className='pt-6 pb-4'>
          <p className='flex gap-2 items-center'>
            <span> 공방 운영 시간대</span>
            <span className='text-grey500 text-xs'>
              최대 4개까지 만들 수 있어요
            </span>
          </p>
          <li className='w-full flex gap-2 flex-nowrap  items-center'>
            <div className='w-full flex justify-center  items-center'>
              <SettingMenu.Input value={9} />
              <SettingMenu.Subtext>~</SettingMenu.Subtext>
              <SettingMenu.Input value={12} />
              <SettingMenu.Subtext>시</SettingMenu.Subtext>
            </div>
            <IconCloseCircle classNames='' />
          </li>
        </SettingMenu>
        <div className='w-full flex justify-center pb-6'>
          <IconPlusCircle classNames='w-6 h-6' />
        </div>

        <SettingMenu className='py-6'>
          <SettingMenu.LabelLayout label='수강 예약 가능 날짜'>
            <SettingMenu.Input value={10} />
            <SettingMenu.Subtext>일 ~</SettingMenu.Subtext>
            <SettingMenu.Input value={1} />
            <SettingMenu.Subtext>일 전</SettingMenu.Subtext>
          </SettingMenu.LabelLayout>
          <SettingMenu.LabelLayout label='수강 취소 가능 날짜 '>
            <SettingMenu.Subtext>최소</SettingMenu.Subtext>
            <SettingMenu.Input value={2} />
            <SettingMenu.Subtext>일 전</SettingMenu.Subtext>
          </SettingMenu.LabelLayout>
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

export default WorkshopSettingOperationPage;
