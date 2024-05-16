import { postAsync } from '@/app/shared/api/fetch';
import { useMutation, useQuery } from '@tanstack/react-query';
import { VerficationCodeRequest } from './type';
import { NoDataResponse } from '@/app/shared/api/type';

const useVerificationCode = () => {
  return useMutation<NoDataResponse, unknown, VerficationCodeRequest>({
    mutationFn: ({ code, email }) =>
      postAsync<VerficationCodeRequest, NoDataResponse>(
        'members/verifications/codes',
        { code, email }
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
      // router.push('/signup/teacher?authenticated=1');
    },
    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useVerificationCode;
