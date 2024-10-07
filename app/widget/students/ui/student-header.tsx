'use client';

import ModalLayout from '@/app/shared/modules/modal/ui/ModalLayout';
import Header from '@/app/shared/modules/header';
import ModalMenu from '../../../shared/modules/modal/ui/ModalMenu';

const StudentHeader = () => {
  return (
    <div className='px-4'>
      <Header>
        <Header.Back />
        <Header.MeatBall>
          <ModalLayout>
            <ModalMenu iconUrl='/icon/ic-edit_24px.svg' onClick={() => {}}>
              프로필 수정하기
            </ModalMenu>
            <ModalMenu
              iconUrl='/icon/ic-complete-24px.svg'
              onClick={() => {}}
              type='secondary'
            >
              수강 종료하기
            </ModalMenu>
          </ModalLayout>
        </Header.MeatBall>
      </Header>
    </div>
  );
};

export default StudentHeader;
