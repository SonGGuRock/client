'use client';

import AllVisitButton from '@/app/widget/reservations/ui/all-visit-button';
import ReservationItem from '@/app/widget/reservations/ui/reservations-item';
import Header from '@/app/shared/modules/header';
import StudentInfo from '@/app/widget/students/ui/student-info';
import StudentTab from '@/app/widget/students/ui/student-tab';
import ModalMenu from '@/app/shared/atoms/ModalMenu';
import { useRouter } from 'next/navigation';

const StudentDetailPage = () => {
  const router = useRouter();

  const handleClickEdit = () => {
    router.push('/students/1/edit');
  };

  const handleClickDeactivateStudent = () => {
    // TODO: 수강 종료
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

      <StudentInfo />
      <StudentTab />

      <div className='flex flex-wrap p-4 gap-2'>
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled={false} />
        <ReservationItem isFulfilled />
        <AllVisitButton />
      </div>
    </div>
  );
};

export default StudentDetailPage;
