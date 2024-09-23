import { WorkStepType } from '@/app/shared/atoms/work-step-label';
import { ClassTimeItem } from '@/app/widget/reservations/types';

type WorkType = {
  id: number;
  type: string;
  is_active: boolean;
};

type WorkStep = {
  id: number;
  step: WorkStepType['en'];
  is_active: boolean;
};

export type WorkshopDefaultSettingIds = {
  class_times: Pick<ClassTimeItem, 'id' | 'start_time' | 'end_time'>[];
  work_types: WorkType[];
  work_steps: WorkStep[];
};

type WorkshopAddress = {
  roadAddr?: string;
  restAddr?: string;
};

export type WorkshopCrateBody = {
  name: string;
  profile_picture: string;
  address: WorkshopAddress;
  phone_number: string;
};
