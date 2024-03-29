'use client';

import Modal from '@/app/ui/Modal';
import Portal from '@/app/ui/Portal';
import Header from '@/app/ui/shared/modules/header';
import ModalMenu from '../shared/atoms/ModalMenu';

const StudentHeader = () => {
  return (
    <div className='px-4'>
      <Header>
        <Header.Back />
        <Header.MeatBall>
          <Portal>
            <Modal>
              <ModalMenu
                text='프로필 수정하기'
                iconUrl='/icon/ic-edit_24px.svg'
                onClick={() => {}}
              />
              <ModalMenu
                text='수강 종료하기'
                iconUrl='/icon/ic-complete-24px.svg'
                onClick={() => {}}
                type='secondary'
              />
            </Modal>
          </Portal>
        </Header.MeatBall>
      </Header>
    </div>
  );
};

export default StudentHeader;
