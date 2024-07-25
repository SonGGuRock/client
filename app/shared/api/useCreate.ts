import { useQueryClient } from '@tanstack/react-query';
import { useMutateWithCrendetials } from './fetch-with-credentials';

const useCreate = <T>({
  path,
  revalidate,
  params,
  onSuccess,
  onFail,
}: {
  path: string;
  revalidate: boolean;
  params?: { [key: string]: string | number | boolean };
  onSuccess?: () => void;
  onFail?: () => void;
}) => {
  const { mutate, ...rest } = useMutateWithCrendetials<T>(path,params);
  const queryClient = useQueryClient();

  const post = (content: T | undefined) => {
    mutate(
      {
        method: 'POST',
        ...(content && { body: content }),
      },
      {
        onSuccess: () => {
          revalidate && queryClient.invalidateQueries({ queryKey: [path] });
          onSuccess && onSuccess();
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
