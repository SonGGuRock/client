import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { Credentials, AuthTokenResponse } from './type';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const useSigninForm = () => {
  const router = useRouter();
  return useMutation<any, unknown, Credentials>({
    mutationFn: (body: Credentials) =>
      // fetch('/api/authorize/members/login', {
      //   method: 'POST',
      //   body: JSON.stringify(body),
      // }).then((res) => {
      //   if (!res.ok) throw new Error('api Route reqeust fail');
      //   return res.json();
      // }),
      postAsync<Credentials, AuthTokenResponse>('members/login', body),
    onSuccess(data) {
      console.log('Network Request Success:', data);
      Cookies.set('accessToken', data.data.access_token);
      Cookies.set('refreshToken', data.data.refresh_token);
      Cookies.set('MEMBERID', String(data.data.id));
      router.push('/workshops');
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useSigninForm;
