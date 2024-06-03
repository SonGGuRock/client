import { Todo } from '@/app/lib-temp/definition';
import { getAsync } from '@/app/shared/api/fetch';
import { DataResponse } from '@/app/shared/api/type';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetTodos = () =>
  useQuery<DataResponse<Todo[]>, unknown, Todo[]>({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/credentials/todos').then((res) => res.json()),
    select: (data) => data.data,
  });

export function useMutateTodos<T>(path: string, method: 'POST' | 'DELETE') {
  const url = `/api/credentials/${path}`;
  return useMutation({
    mutationFn: (body: T) =>
      fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
      }),
  });
}
// export const useMutateTodos = (path:string, method : 'POST' | 'DELETE',body?: , params?) =>{
// useMutation({
//   mutationFn: () => fetch(`/api/credentials/${path}/${params}`,{
//     method,
//     body,
//   })
// })
// }

interface MutationParams {
  [key: string]: string | number | boolean;
}
