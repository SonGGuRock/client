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

export type Announcment = {
  id: number;
  title: string;
  updated_at: string;
  is_representative_announcement: boolean;
};

export type AnnouncmentRepresentitive = Pick<Announcment, 'id' | 'title'>;
