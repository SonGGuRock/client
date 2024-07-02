import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { VerficationEmailRequest } from './type';
import { NoDataResponse } from '@/app/shared/api/type';

// const useVerificationEmaiil = () => {
//   return useMutation<any, unknown, VerficationEmailRequest>({
//     mutationFn: async ({ is_new_member, email }) => {
//       fetch('/api/authorize/members/verifications/emails', {
//         method: 'POST',
//         body: JSON.stringify({ is_new_member, email }),
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

// ({ is_new_member, email }) =>
//       postAsync<VerficationEmailRequest, NoDataResponse>(
//         'members/verifications/emails',
//         { is_new_member, email }
//       )
