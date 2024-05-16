import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { Credentials, SigninResponse } from './type';
import { useRouter } from 'next/navigation';

const IS_ROUTE_REQUEST = true;

const useSigninForm = () => {
  const router = useRouter();
  return useMutation<SigninResponse, unknown, Credentials>({
    mutationFn: (body: Credentials) =>
      postAsync<Credentials, SigninResponse>(
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
