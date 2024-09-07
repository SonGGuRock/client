import { WORK_STEP } from '@/app/shared/atoms/work-step-label';
import SettingMenu from './setting-menu';
import WorkStepIcon from '@/app/shared/modules/workstep-icon';
import { WorkStepActivation } from '../../workshops/api/type';
import useOperationSetting from '../lib/useOperationSetting';

const OperationSettingWorkstep = () => {
  const { operation, set } = useOperationSetting();

  if (!operation) {
    return <div>loading</div>;
  }

  const formatted = Object.keys(operation.work_step_activation).map(
    (stepEn) => {
      const stepKo = WORK_STEP.find((step) => step.en === stepEn)?.ko;
      return {
        ko: stepKo,
        en: stepEn,
        isActive:
          operation.work_step_activation[stepEn as keyof WorkStepActivation],
      };
    }
  );

  return (
    <SettingMenu className='py-6'>
      <p className='flex gap-2 items-center'>
        <span>작업 상태 설정</span>
        <span className='text-grey500 text-xs'>최소 2개를 선택해주세요</span>
      </p>
      {formatted.map((step) => (
        <SettingMenu.Activation
          key={step.en}
          isActive={step.isActive}
          onSwitch={(value) => {
            set({
              work_step_activation: {
                ...operation.work_step_activation,
                [step.en]: value,
              },
            });
          }}
        >
          <div className='opacity-60 flex gap-2'>
            <WorkStepIcon step={step.en} />
            {step.ko}
          </div>
        </SettingMenu.Activation>
      ))}
    </SettingMenu>
  );
};

export default OperationSettingWorkstep;
