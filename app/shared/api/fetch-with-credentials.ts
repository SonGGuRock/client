import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DataResponse } from './type';
import { useRouter } from 'next/navigation';
import { Todo } from '@/app/lib-temp/definition';

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
  const router = useRouter();
  let url = `/api/credentials/${path}`;
  if (params) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    url += `?${queryParams.toString()}`;
  }

  const { data, isError } = useQuery<DataResponse<T>, unknown, T>({
    queryKey: [path, params],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
    select: (data) => data.data,
  });

  if (isError) {
    router.push('/signin');
  } else {
    return data;
  }
}

export type TodoEditBody = {
  content: string;
  is_completed: boolean;
};
export type TodoCreateBody = Pick<TodoEditBody, 'content'>;
