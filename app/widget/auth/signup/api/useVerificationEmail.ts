import { POST } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { NoDataResponse, VerficationEmailRequest } from './type';
import { useRouter } from 'next/navigation';

const useVerificationEmaiil = () => {
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
