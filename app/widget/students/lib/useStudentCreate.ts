import { useMutation } from '@tanstack/react-query';
import { StudentCreateRequest } from './type';
import { useMutateWithCrendetials } from '../../todos/lib/useTodos';

const useStudentCreate = () => {
  return useMutation({
    mutationFn: (body: StudentCreateRequest) =>
      fetch('api/credentials/students'),
  });
};

export default useStudentCreate;
