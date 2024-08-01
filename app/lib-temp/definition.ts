export type Todo = {
  id: number;
  content: string;
  is_completed: boolean;
  author: {
    id: number;
    profile_picture: string;
  };
};

export type TodoContent = Pick<Todo, 'content' | 'is_completed'>;

//   temp
export type TodosResponse = {
  todosMock: Todo[];
};

// students

export type Student = {
  name: string;
  profile_picture: string;
  id: number;
  remaining_class_count: number;
  last_payment_date: string;
};

export type StudentDetail = {
  name: string;
  profile_picture: string;
  id: number;
  remaining_class_count: number;
  total_class_count: number;
  last_payment_date: string;
  register_date: string;
  phone_number: string;
  is_active: boolean;
};

export type Reservation = {
  student_id: number;
  reservation_date: string;
  day_name: string;
  start_time: string;
  end_time: string;
  work_type: WORK_TYPE;
  remaining_class_count: number;
  total_class_count: number;
};

type WORK_TYPE = 'throw' | 'hand';

export type CraftItem = {
  craft_id: number;
  reservation_id: number;
  student_id: number;
  name: string;
  craft_item_picture: string;
  craft_item_work_step: string;
  content: string;
};

export type ReservationAddRequestBody = {
  class_count: number;
  payment_date: string;
};
