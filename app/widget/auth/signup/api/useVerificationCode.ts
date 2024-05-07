import { POST } from '@/app/shared/api/fetch';
import { useMutation, useQuery } from '@tanstack/react-query';
import { NoDataResponse, VerficationCodeRequest } from './type';
import { useRouter } from 'next/navigation';

const useVerificationCode = () => {
  const router = useRouter();
  return useMutation<NoDataResponse, unknown, VerficationCodeRequest>({
    mutationFn: ({ code, email }) =>
      POST<VerficationCodeRequest, NoDataResponse>(
        'members/verifications/codes',
        { code, email }
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
      router.push('/signup/teacher?valid=1');
    },
    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useVerificationCode;
