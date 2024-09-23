import { WorkStepType } from '@/app/shared/atoms/work-step-label';

export type Craft = {
  craft_id: string;
  name: string;
  updated_at: string;
  now_work_step: WorkStepType['ko'];
  thumbnail: string;
  item_count: number;
};
