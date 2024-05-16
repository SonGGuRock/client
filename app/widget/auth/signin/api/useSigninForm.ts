import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { SigninRequest, SigninResponse } from './type';
import { useRouter } from 'next/navigation';

const IS_ROUTE_REQUEST = true;

const useSigninForm = () => {
  const router = useRouter();
  return useMutation<SigninResponse, unknown, SigninRequest>({
    mutationFn: (body: SigninRequest) =>
      postAsync<SigninRequest, SigninResponse>(
        'api/signin',
        body,
        IS_ROUTE_REQUEST
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data);
      router.push('/workshops');
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useSigninForm;
