import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DataResponse } from './type';
import { useRouter } from 'next/navigation';

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
    }) => {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(body && { body: JSON.stringify(body) }),
      };

      return fetch(url, options);
    },
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

  const { data, isError, isLoading } = useQuery<DataResponse<T>, unknown, T>({
    queryKey: params ? [path, params] : [path],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
    select: (data) => data.data,
    refetchOnMount: true,
  });

  if (isError) {
    router.push('/signin');
  }

  return { data, isLoading, isError };
}

export type TodoEditBody = {
  content: string;
  is_completed: boolean;
};

export type TodoCreateBody = Pick<TodoEditBody, 'content'>;
