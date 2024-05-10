import { POST } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { SignupRequest, SignupResponse } from './type';
import { useRouter } from 'next/navigation';

const useSignupForm = () => {
  const router = useRouter();
  return useMutation<SignupResponse, unknown, SignupRequest>({
    mutationFn: (body: SignupRequest) =>
      POST<SignupRequest, SignupResponse>('members/signup', body),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
      router.push('/workshops');
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useSignupForm;
