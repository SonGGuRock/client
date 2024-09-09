import { WorkStepType } from '@/app/shared/atoms/work-step-label';

export type CraftCreateBody = {
  student_id: number;
  name: string;
};

export type CraftCreateBodyAndTitle = CraftCreateBody & {
  title: string;
};

export type CraftItemCreateBody = {
  craft_id: number;
  picture: string;
  work_step_id: number;
  content: string;
  reservation_id: number;
  craft_status: CraftStatus;
};

export type CraftSummary = {
  id: number;
  name: string;
  thumbnail: string;
  updated_at: string;
  now_work_step: WorkStepType['en'] | null;
  item_count: number;
};

export type CraftSummaries = { totalPages: number; crafts: CraftSummary[] };
export type CraftStatus = 'ongoing' | 'completed' | 'keep';
