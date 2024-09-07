import { postAsync } from '@/app/shared/api/fetch';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Credentials } from '../../signin/api/type';

const useResetPassword = () => {
  return useMutation<AxiosResponse, unknown, Credentials>({
    mutationFn: (credential) => postAsync('members/reset/password', credential),
  });
};

export default useResetPassword;
