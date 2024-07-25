import { useQueryClient } from '@tanstack/react-query';
import { useMutateWithCrendetials } from './fetch-with-credentials';

const useDelete = <T>({
  path,
  revalidate,
  revalidatePath,
  onSuccess,
  onFail,
}: {
  path: string;
  revalidate: boolean;

  revalidatePath?: string;
  onSuccess?: () => void;
  onFail?: () => void;
}) => {
  const { mutate, ...rest } = useMutateWithCrendetials<T>(path);
  const queryClient = useQueryClient();

  const remove = () => {
    mutate(
      {
        method: 'DELETE',
      },
      {
        onSuccess: () => {
          revalidate &&
            queryClient.invalidateQueries({
              queryKey: revalidatePath ? [revalidatePath] : [path],
            });
          onSuccess && onSuccess();
        },
        onError: () => {
          onFail && onFail();
        },
      }
    );
  };

  return { remove, ...rest };
};

export default useDelete;
