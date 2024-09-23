import { useMutation } from '@tanstack/react-query';
import { StudentMutateRequest } from './type';

const useStudentCreate = () => {
  return useMutation({
    mutationFn: (body: StudentMutateRequest) =>
      fetch('api/credentials/students'),
  });
};

export default useStudentCreate;
