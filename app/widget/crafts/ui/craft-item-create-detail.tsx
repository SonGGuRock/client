import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import Title from '@/app/shared/atoms/Title';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import SelectLikeButton from '@/app/shared/atoms/select-like-button';
import Textarea from '@/app/shared/atoms/textarea';

const CraftItemCreateDetail = () => {
  const { openModal } = useModal();
  const statusModalContent = <div>statusModalContent</div>;

  const handleOpenModalUploadPicture = () => {
    openModal(
      <div className='w-full flex flex-wrap gap-2'>
        <ModalMenu onClick={() => {}} iconUrl='/icon/ic-gallery-black-24px.svg'>
          앨범에서 선택하기
        </ModalMenu>
        <ModalMenu onClick={() => {}} iconUrl='/icon/ic-camera-24px.svg'>
          촬영하기
        </ModalMenu>
      </div>
    );
  };

  const handleOpenModalWorkStep = () => {
    openModal(statusModalContent);
  };

  const handleOpenModalReservationDate = () => {
    openModal(<div>수업일 선택</div>);
  };

  return (
    <div>
      <Title size='large'>하얀 물병들</Title>
      <div
        onClick={handleOpenModalUploadPicture}
        className='my-4 bg-grey50 rounded-lg w-full h-[320px] flex justify-center items-center'
      >
        <IconPlusCircle />
      </div>

      <div className='flex gap-2'>
        <SelectLikeButton onClick={handleOpenModalWorkStep}>
          작품 상태 선택
        </SelectLikeButton>
        <SelectLikeButton onClick={handleOpenModalReservationDate}>
          수업일 선택
        </SelectLikeButton>
      </div>

      <Textarea
        placeholder='작품을 설명해주세요'
        value=''
        classNames='mt-4 w-full'
      />
      <PortalModal />
    </div>
  );
};

export default CraftItemCreateDetail;
