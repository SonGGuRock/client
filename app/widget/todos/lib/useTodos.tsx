import { Todo } from '@/app/lib-temp/definition';
import { getAsync } from '@/app/shared/api/fetch';
import { DataResponse } from '@/app/shared/api/type';
import { useQuery } from '@tanstack/react-query';

const useTodos = () =>
  useQuery<DataResponse<Todo[]>, unknown, Todo[]>({
    queryKey: ['todos'],
    queryFn: () => getAsync('todos'),
    select: (data) => data.data,
  });

export default useTodos;
