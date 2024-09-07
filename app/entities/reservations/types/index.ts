export type ReservationCreateBody = {
  student_id: number;
  reservation_date: string;
  class_time_id: number;
  work_type_id: number;
};

export type ReservationCreateResponse = {
  student_name: string;
  reservation_date: string;
  class_time_id: number;
  work_type_id: number;
};

export type ClassTime = {
  start_time: number;
  end_time: number;
};

export type ReservationClassTime = {
  id: number;
  throw_count: number;
  hand_count: number;
} & ClassTime;
