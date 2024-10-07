import { WorkshopDefaultSettingIds } from '@/app/entities/workshops/types';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import Button from '@/app/shared/atoms/button/Button';
import Title from '@/app/shared/atoms/Title';
import { WORK_STEP } from '@/app/shared/atoms/work-step-label';
import Image from 'next/image';
import CraftStatusButtons from './craft-status-buttons';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import { CraftStatus } from '@/app/entities/crafts/types';

const CraftWorkStatusModal = () => {
  const { closeModal } = useModal();
  const { form: craftItemCreateBody, fill: fillCraftItemCreateBody } =
    useFormFill(CraftItemMutateContext);
  const { data: setting } = useQueryWithCredentials<WorkshopDefaultSettingIds>(
    'workshops/settings/ids'
  );

  const handleSelectStatus = (status: CraftStatus) => {
    fillCraftItemCreateBody({ craft_status: status });
  };

  const handleSelectWorkStep = (workStepId: number) => {
    fillCraftItemCreateBody({ work_step_id: workStepId });
  };

  if (!setting) return <></>;
  return (
    <div className='flex flex-wrap gap-[6px]'>
      <Title size='medium' classNames='w-full'>
        작품 상태 선택
      </Title>
      <CraftStatusButtons
        style='item-primary'
        onClick={handleSelectStatus}
        activeStatus={craftItemCreateBody.craft_status}
      />
      <div className='w-full flex flex-wrap justify-center gap-2'>
        {setting.work_steps.map((step) => (
          <div
            key={step.id}
            onClick={() => {
              handleSelectWorkStep(step.id);
            }}
            className={`border w-[80px] min-h-[64px] rounded-md flex flex-wrap flex-col justify-center items-center cursor-pointer ${
              craftItemCreateBody.work_step_id === step.id
                ? 'border-brown'
                : 'border-grey150'
            }`}
          >
            <Image
              src={`/icon/workstep/ic-${step.step}-24px.svg`}
              alt={step.step}
              width={20}
              height={20}
            />
            <span className='w-full flex justify-center  text-grey600 text-sm'>
              {WORK_STEP.find((item) => item.en === step.step)?.ko}
            </span>
          </div>
        ))}
      </div>
      <Button style='primary' className='w-full mt-2' onClick={closeModal}>
        다음
      </Button>
    </div>
  );
};

export default CraftWorkStatusModal;
