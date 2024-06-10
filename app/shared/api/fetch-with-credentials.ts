import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DataResponse } from './type';

export function useMutateWithCrendetials<T>(
  path: string,
  params?: { [key: string]: string | number | boolean }
) {
  let url = `/api/credentials/${path}`;
  if (params) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    url += `?${queryParams.toString()}`;
  }

  return useMutation({
    mutationFn: ({
      method,
      body,
    }: {
      method: 'POST' | 'DELETE' | 'PUT';
      body?: T;
    }) =>
      fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
      }),
  });
}

export function useQueryWithCredentials<T>(
  path: string,
  params?: { [key: string]: string | number | boolean }
) {
  let url = `/api/credentials/${path}`;
  if (params) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    url += `?${queryParams.toString()}`;
  }

  return useQuery<DataResponse<T>, unknown, T>({
    queryKey: [path, params],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => data),
    select: (data) => data.data,
  });
}

export function useOptimisticUpdateWithCrendetials<T>(
  path: string,
  params?: { [key: string]: string | number | boolean }
) {
  const queryClient = useQueryClient();

  let url = `/api/credentials/${path}`;
  if (params) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    url += `?${queryParams.toString()}`;
  }

  return useMutation({
    mutationFn: ({
      method,
      body,
    }: {
      method: 'POST' | 'DELETE' | 'PUT';
      body?: T;
    }) =>
      fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
      }),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (old: any) => [...old, newTodo]);
      console.log('onMutate');
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      console.log('onError');
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
      console.log('onSettled');
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
