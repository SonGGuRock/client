import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { SignupRequest, SignupResponse } from './type';

const useSignupForm = () => {
  return useMutation<any, unknown, SignupRequest>({
    mutationFn: (body: SignupRequest) =>
      // fetch('/api/authorize/members/signup', {
      //   method: 'POST',
      //   body: JSON.stringify(body),
      // }).then((res) => {
      //   if (!res.ok) throw new Error('api Route reqeust fail');
      //   return res.json();
      // }),
      postAsync<SignupRequest, SignupResponse>('members/signup', body),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useSignupForm;
