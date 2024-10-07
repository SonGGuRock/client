import { DataResponse } from '@/app/shared/api/type';
import { useMutation } from '@tanstack/react-query';
import { TeacherRegisterResponse } from './type';
import { postAsync } from '@/app/shared/api/fetch';
import { useRouter } from 'next/navigation';
const useTeacherRegister = () => {
  const router = useRouter()
  return useMutation<DataResponse<TeacherRegisterResponse>, Error, number>({
    mutationFn: (workshop_id: number) =>
      postAsync<null, DataResponse<TeacherRegisterResponse>>(
        `workshops/${workshop_id}/teachers`,
        null
      ),
    onSuccess(data) {
      console.log('Network Request Success:', data.result);
      router.push('/workshops/register/success')
    },

    onError(err) {
      console.error('Network Request Fail:', err);
    },
  });
};

export default useTeacherRegister;
