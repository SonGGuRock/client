'use client';

import Header from '@/app/shared/modules/header';
import StudentForm from '@/app/widget/students/ui/student-form';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import { useQueryClient } from '@tanstack/react-query';
import { StudentMutateRequest } from '@/app/widget/students/lib/type';

const StudentCreatePage = () => {
  const { mutate } = useMutateWithCrendetials('students');
  const queryClient = useQueryClient();
  const createStudent = (body: StudentMutateRequest) =>
    mutate(
      {
        method: 'POST',
        body,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey.some((key) => {
                return Array.isArray(key) && key.includes('students');
              });
            },
          });
          window.location.href = '/students';
          // router.push('/students');
          // router.push('/student/create/success')
        },
      }
    );
  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>수강생 등록</Header.Title>
        </div>
      </Header>

      {/* <div className='flex justify-center items-center w-full py-8'>
        <ProfileDefault />
      </div> */}

      <StudentForm onSubmit={createStudent} />
    </div>
  );
};

export default StudentCreatePage;
