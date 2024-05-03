import ModalMenu from '@/app/shared/atoms/ModalMenu';
import Header from '@/app/shared/modules/header';

const CraftItemDetailHeader = () => {
  return (
    <Header className='w-full absolute left-0 top-0'>
      <Header.Back />
      <Header.MeatBall>
        <ModalMenu iconUrl='/icon/ic-edit_24px.svg' onClick={() => {}}>
          편집하기
        </ModalMenu>
        <ModalMenu
          type='secondary'
          iconUrl='/icon/ic-delete_24px.svg'
          onClick={() => {}}
        >
          삭제하기
        </ModalMenu>
      </Header.MeatBall>
    </Header>
  );
};

export default CraftItemDetailHeader;
