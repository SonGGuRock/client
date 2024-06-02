import { postAsync } from '@/app/shared/api/fetch';
import { NoDataResponse } from '@/app/shared/api/type';
import { useMutation } from '@tanstack/react-query';

const useWorkshopActivate = () => {
  return useMutation<any, unknown, number>({
    mutationFn: (workshop_id: number) =>
      fetch(`api/workshops/${workshop_id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }).then((res) => {
        if (!res.ok) throw new Error('api Route reqeust fail');
        return res;
      }),
    onSuccess(data) {
      console.log('Network Request Success:', data);
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useWorkshopActivate;
