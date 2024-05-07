import { POST } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { NoDataResponse, VerficationEmailRequest } from './type';
import { useRouter } from 'next/navigation';

const useVerificationEmaiil = (emailValue: string) => {
  const router = useRouter();

  return useMutation<NoDataResponse, unknown, VerficationEmailRequest>({
    mutationFn: ({ is_new_member, email }) =>
      POST<VerficationEmailRequest, NoDataResponse>(
        'members/verifications/emails',
        { is_new_member, email }
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
      router.push('/signup/authentication');
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useVerificationEmaiil;

// useQuery({
//   queryKey: ['signup', 'verification-email'],
//   queryFn: async () => {
//     return POST<VerficationEmailRequest, NoDataResponse>(
//       'members/verifications/emails',
//       {
//         is_new_member: true,
//         email: emailValue,
//       }
//     );
//   },
//   enabled: false,
//   staleTime: 1000,
