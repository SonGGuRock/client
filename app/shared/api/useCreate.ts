import { useQueryClient } from '@tanstack/react-query';
import { useMutateWithCrendetials } from './fetch-with-credentials';

const useCreate = <T, R = Response>({
  path,
  revalidate,
  revalidatePath,
  params,
  onSuccess,
  onFail,
}: {
  path: string;
  revalidate: boolean;
  revalidatePath?: string;
  params?: { [key: string]: string | number | boolean };
  onSuccess?: (data: R) => void;
  onFail?: () => void;
}) => {
  const { mutate, ...rest } = useMutateWithCrendetials<T, R>(path, params);
  const queryClient = useQueryClient();

  const post = (content: T | undefined) => {
    mutate(
      {
        method: 'POST',
        ...(content && { body: content }),
      },
      {
        onSuccess: (data: R) => {
          revalidate &&
            queryClient.invalidateQueries({
              queryKey: [revalidatePath ?? path],
            });
          onSuccess && onSuccess(data);
        },
        onError: () => {
          onFail && onFail();
        },
      }
    );
  };

  return { post, ...rest };
};

export default useCreate;
