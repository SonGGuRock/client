export type class_time = {
  id: number;
  start_time: string;
  end_time: string;
};

type work_type = {
  id: number;
  type: 'throw' | 'hand';
  is_active: boolean;
};

type work_step = {
  id: number;
  step: string;
  is_active: boolean;
};

export type WorkshopIds = {
  class_times: class_time[];
  work_types: work_type[];
  work_steps: work_step[];
};
