type WORK_TYPE = 'throw' | 'hand';

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

export type ReservationAddRequestBody = {
  class_count: number;
  payment_date: string;
};

export type StudentReservation = {
  id: number;
  reservation_date: string;
  day_name: string;
  start_time: string;
  end_time: string;
  work_type: WORK_TYPE;
  remaining_class_count: number;
  total_class_count: number;
};
