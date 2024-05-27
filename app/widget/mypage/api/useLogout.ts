import { putAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';

const useLogout = () => {
  return useMutation({
    mutationFn: () => putAsync('members/logout'),
  });
};

export default useLogout;
