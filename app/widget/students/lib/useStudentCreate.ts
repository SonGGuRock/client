import { useMutation } from '@tanstack/react-query';
import { StudentMutateRequest } from './type';
import { useMutateWithCrendetials } from '../../todos/lib/useTodos';

const useStudentCreate = () => {
  return useMutation({
    mutationFn: (body: StudentMutateRequest) =>
      fetch('api/credentials/students'),
  });
};

export default useStudentCreate;
