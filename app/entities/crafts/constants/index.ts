import { WorkStepType } from '@/app/shared/atoms/work-step-label';

export const WORK_STEP_MAP: Record<WorkStepType['en'], WorkStepType['ko']> = {
  shape: '성형',
  dry: '건조',
  trim: '정형',
  bisque_fire: '초벌',
  glaze: '시유',
  glaze_fire: '재벌',
  triple_fire: '삼벌',
  color: '채색',
};
