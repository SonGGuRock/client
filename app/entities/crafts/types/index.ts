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
  student_name: string;
  now_craft_item: number | null;
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

export type CommentAuthor = {
  id: number;
  profile_picture: string;
  name: string;
};
export type Comment = {
  id: number;
  content: string;
  updated_at: string;
  like_count: number;
  is_liked: boolean;
  author: CommentAuthor;
};
export type ItemOthers = {
  id: number;
  picture: string;
  work_step: WorkStepType['en'];
};
export type AuthorStudent = {
  id: number;
  profile_picture: string;
  name: string;
};

export type CraftItemDetail = {
  id: number;
  picture: string;
  work_step: number;
  content: string;
  reservation_date: string;
  updated_at: string;
  craft_name: string;

  comments: Comment[];
  items: ItemOthers[];

  student: AuthorStudent;
};

export type TodayStudentCrafts = AuthorStudent & {
  crafts: CraftSummary[];
};
