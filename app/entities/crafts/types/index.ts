export type CraftCreateBody = {
  student_id: number;
  name: string;
};

export type CraftItemCreateBody = {
  craft_id: number;
  picture: string;
  work_step_id: number;
  content: string;
  reservation_id: number;
};
