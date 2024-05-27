import { deleteAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';

const useWithdrawal = () => {
  return useMutation({
    mutationFn: () => deleteAsync('members'),
  });
};

export default useWithdrawal;
