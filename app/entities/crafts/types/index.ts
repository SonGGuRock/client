import { WorkStepType } from '@/app/shared/atoms/work-step-label';

export type CraftQueryParams = {
  work_step: WorkStepType['en'] | 'all';
  status: CraftStatus;
  page: number;
};

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
  now_work_step: number | null;
  item_count: number;
};

export type CraftSummaryForStudent = {
  id: number;
  name: string;
  profile_picture: string;
  crafts: CraftSummary[];
};

export type CraftSummaries = { totalPages: number; crafts: CraftSummary[] };
export type CraftStatus = 'ongoing' | 'completed' | 'keep';

// GET crafts
export type CraftSummaryList = {
  total_page_count: number;
  crafts: CraftSummary[];
};

export type CraftSummaryForStudentList = CraftSummaryForStudent[];
