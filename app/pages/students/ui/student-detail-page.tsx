'use client';

import Header from '@/app/shared/modules/header';
import StudentInfo from '@/app/widget/students/ui/student-info';
import StudentTab from '@/app/widget/students/ui/student-tab';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import { usePathname, useRouter } from 'next/navigation';
import StudentReservationList from '@/app/widget/students/ui/student-reservation-list';
import {
  useMutateWithCrendetials,
  useQueryWithCredentials,
} from '@/app/shared/api/fetch-with-credentials';
import { useQueryClient } from '@tanstack/react-query';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import { StudentDetail } from '@/app/lib-temp/definition';
import Toast from '@/app/shared/modules/toast/ui/Toast';
import useToggle from '@/app/shared/lib/useToggle';
import CraftFirstList from '@/app/widget/crafts/ui/craft-first-list';
import { CraftSummaryList } from '@/app/entities/crafts/types';

const StudentDetailPage = () => {
  const router = useRouter();
  const path = usePathname();
  const studentId = Number(path.split('/')[2]);
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const { toggleToast, toast } = useToast();
  const { toggle: toggleTap, open: showCrafts } = useToggle();

  const { data: student } = useQueryWithCredentials<StudentDetail>(
    `students/${studentId}`
  );
  const { data: craftList } = useQueryWithCredentials<CraftSummaryList>(
    `crafts/students/${studentId}`
  );

  const { mutate } = useMutateWithCrendetials(
    `/students/${studentId}/${student?.is_active ? 'inactive' : 'active'}`
  );
  const { mutate: remove } = useMutateWithCrendetials(`/students/${studentId}`);

  const handleClickEdit = () => {
    closeModal();
    router.push(`/students/${studentId}/edit`);
  };

  const toggleActiveStudent = () => {
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
            text: '수강 상태를 변경하였습니다',
          });
        },
      }
    );
  };

  if (!student) return <div> 수강생 정보를 불러오고 있어요!</div>;

  const deleteStudent = () => {
    remove(
      { method: 'DELETE' },
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
            text: '수강생 정보를 삭제하였습니다',
          });
          router.push('/students');
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
            {student?.is_active ? (
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
                  onClick={toggleActiveStudent}
                >
                  수강 종료하기
                </ModalMenu>
              </>
            ) : (
              <>
                <ModalMenu
                  iconUrl='/icon/ic-edit_24px.svg'
                  onClick={toggleActiveStudent}
                >
                  수강 중으로 전환하기
                </ModalMenu>
                <ModalMenu
                  type='secondary'
                  iconUrl='/icon/ic-complete-24px.svg'
                  onClick={deleteStudent}
                >
                  수강생 정보 삭제하기
                </ModalMenu>
              </>
            )}
          </Header.MeatBall>
        </Header>
      </div>

      <StudentInfo id={Number(studentId)} />
      <StudentTab showCrafts={showCrafts} onSwap={toggleTap} />
      {!showCrafts ? (
        <StudentReservationList id={Number(studentId)} name={student.name} />
      ) : (
        craftList && (
          <CraftFirstList craftList={craftList?.crafts} showCraftName={true} />
        )
      )}
      {toast && <Toast text={toast.text ?? ''} />}
    </div>
  );
};

export default StudentDetailPage;
