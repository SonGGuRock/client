import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { VerficationEmailRequest } from './type';
import { NoDataResponse } from '@/app/shared/api/type';

const useVerificationEmaiil = () => {
  return useMutation<NoDataResponse, unknown, VerficationEmailRequest>({
    mutationFn: ({ is_new_member, email }) =>
      postAsync<VerficationEmailRequest, NoDataResponse>(
        'members/verifications/emails',
        { is_new_member, email }
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useVerificationEmaiil;
