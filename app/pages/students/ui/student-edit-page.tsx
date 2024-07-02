'use client';

import { StudentDetail } from '@/app/lib-temp/definition';
import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import Header from '@/app/shared/modules/header';
import { StudentMutateRequest } from '@/app/widget/students/lib/type';
import StudentForm from '@/app/widget/students/ui/student-form';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

const StudentEditPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const studentId = pathname.split('/')[2];
  const { data: student } = useQueryWithCredentials<StudentDetail>(
    `students/${studentId}`
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutateWithCrendetials(`students/${studentId}`);

  const updateStudent = (body: StudentMutateRequest) =>
    mutate(
      {
        method: 'PUT',
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
          router.push(`/students/${studentId}`);
        },
      }
    );

  return (
    <div className='py-3 px-4'>
      <Header>
        <div className='w-full flex gap-1 justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <Header.Back />
            <Header.Title size='medium'>수강생 정보 수정</Header.Title>
          </div>
          <Header.Button size='small'>완료</Header.Button>
        </div>
      </Header>

      <StudentForm onSubmit={updateStudent} initialData={student} />
    </div>
  );
};

export default StudentEditPage;
