export type ReservationItem = {
  id: number;
  work_type: string;
  remaining_class_count: number;
  total_class_count: number;
};

export type ClassTimeItem = {
  id: number;
  start_time: string;
  end_time: string;
  throw_count: number;
  hand_count: number;
};

export type ReservationListItem = ClassTimeItem & {
  reservations: ReservationItem[];
};

export type ReservationDailySummary = {
  visitors: number;
  day_name: string;
  today: string;
  class_times: ClassTimeItem[];
};
