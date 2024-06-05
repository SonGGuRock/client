import { Todo } from '@/app/lib-temp/definition';
import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';

export const useGetTodos = () =>
  useQuery<DataResponse<Todo[]>, unknown, Todo[]>({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/credentials/todos').then((res) => res.json()),
    select: (data) => data.data,
  });
