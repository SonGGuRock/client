import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { WorkshopDefaultSettingIds } from '../../workshops/types';
import Image from 'next/image';
import { WORK_STEP_MAP } from '../constants';
import CraftItemWorkstep from '@/app/widget/crafts/ui/craft-item-workstep';

const useWorkStep = () => {
  const { data: ids } = useQueryWithCredentials<WorkshopDefaultSettingIds>(
    'workshops/settings/ids'
  );
  const getWorkStepKrWithIcon = (stepId: number) => {
    const en = ids?.work_steps.find((step) => step.id === stepId)?.step;
    return (
      en && (
        <span className='inline-flex gap-2'>
          <Image
            src={`/icon/workstep/ic-${en}-24px.svg`}
            width={16}
            height={16}
            alt={`${en} icon`}
          />
          {WORK_STEP_MAP[en]}
        </span>
      )
    );
  };

  const getWorkStepEn = (stepId: number) => {
    const en = ids?.work_steps.find((step) => step.id === stepId)?.step;
    return en;
  };
  return { getWorkStepKrWithIcon, getWorkStepEn };
};

export default useWorkStep;
