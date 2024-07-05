import { useMutation } from '@tanstack/react-query';
import { WorkshopMutateRequest, WorkshopCreateResponse } from './type';
import { postAsync } from '@/app/shared/api/fetch';

const useWorkshopCreate = () => {
  return useMutation<WorkshopCreateResponse, unknown, WorkshopMutateRequest>({
    mutationFn: (body: WorkshopMutateRequest) => postAsync('workshops', body),
    onSuccess(data) {
      console.log('Network Request Success:', data);
    },
    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useWorkshopCreate;
