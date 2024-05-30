import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { Credentials, AuthTokenResponse } from './type';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const IS_ROUTE_REQUEST = true;

const useSigninForm = () => {
  const router = useRouter();
  return useMutation<AuthTokenResponse, unknown, Credentials>({
    mutationFn: (body: Credentials) =>
      postAsync<Credentials, AuthTokenResponse>('members/login', body),
    onSuccess(data) {
      console.log('Network Request Success:', data);
      Cookies.set('accessToken', data.data.access_token);
      Cookies.set('refreshToken', data.data.access_token);
      router.push('/workshops');
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useSigninForm;
