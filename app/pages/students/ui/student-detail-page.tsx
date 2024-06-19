'use client';

import Header from '@/app/shared/modules/header';
import StudentInfo from '@/app/widget/students/ui/student-info';
import StudentTab from '@/app/widget/students/ui/student-tab';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import { usePathname, useRouter } from 'next/navigation';
import StudentReservationList from '@/app/widget/students/ui/student-reservation-list';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import { useQueryClient } from '@tanstack/react-query';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import { Toast } from '@/app/shared/modules/toast/ui/Toast';

const StudentDetailPage = () => {
  const router = useRouter();
  const path = usePathname();
  const studentId = Number(path.split('/')[2]);
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const { toggleToast, toast } = useToast();

  const { mutate } = useMutateWithCrendetials(
    `/students/${studentId}/inactive`
  );

  const handleClickEdit = () => {
    router.push(`/students/${studentId}/edit`);
  };

  const handleClickDeactivateStudent = () => {
    mutate(
      { method: 'PUT' },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) =>
              query.queryKey.some(
                (key) => typeof key === 'string' && key.includes(`students`)
              ),
          });
          closeModal();
          toggleToast({
            text: '수강을 종료하였습니다',
          });
        },
      }
    );
  };
  return (
    <div className='py-3'>
      <div className='px-4'>
        <Header>
          <Header.Back />
          <Header.MeatBall>
            <>
              <ModalMenu
                iconUrl='/icon/ic-edit_24px.svg'
                onClick={handleClickEdit}
              >
                프로필 수정하기
              </ModalMenu>
              <ModalMenu
                type='secondary'
                iconUrl='/icon/ic-complete-24px.svg'
                onClick={handleClickDeactivateStudent}
              >
                수강 종료하기
              </ModalMenu>
            </>
          </Header.MeatBall>
        </Header>
      </div>

      <StudentInfo id={studentId} />
      <StudentTab />

      <StudentReservationList id={studentId} />
      {toast && <Toast text={toast.text ?? ''} />}
    </div>
  );
};

export default StudentDetailPage;
