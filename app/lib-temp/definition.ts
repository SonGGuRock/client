export type Todo = {
  id: number;
  content: string;
  is_completed: boolean;
  author: {
    id: number;
    profile_picture: string;
  };
};

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
