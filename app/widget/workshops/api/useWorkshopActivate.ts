import { postAsync } from '@/app/shared/api/fetch';
import { NoDataResponse } from '@/app/shared/api/type';
import { useMutation } from '@tanstack/react-query';

const useWorkshopActivate = () => {
  return useMutation<NoDataResponse, unknown, number>({
    mutationFn: (workshop_id: number) =>
      postAsync<any, NoDataResponse>(
        `workshops/${workshop_id}/teachers/active`
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data);
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useWorkshopActivate;
