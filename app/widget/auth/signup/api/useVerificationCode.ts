import { postAsync } from '@/app/shared/api/fetch';
import { useMutation, useQuery } from '@tanstack/react-query';
import { VerficationCodeRequest } from './type';
import { NoDataResponse } from '@/app/shared/api/type';

// const useVerificationCode = () => {
//   return useMutation<any, unknown, VerficationCodeRequest>({
//     mutationFn: async ({ code, email }) => {
//       fetch('/api/authorize/members/verifications/codes', {
//         method: 'POST',
//         body: JSON.stringify({ code, email }),
//       }).then((res) => {
//         if (!res.ok) throw new Error('api Route reqeust fail');
//         return res;
//       });
//     },
//     onSuccess(data) {
//       console.log('Network Request Success:', data);
//     },

//     onError(err) {
//       console.error('Network Request Fail:', err);
//     },
//   });
// };

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
