import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import Title from '@/app/shared/atoms/Title';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import SelectLikeButton from '@/app/shared/atoms/select-like-button';
import Textarea from '@/app/shared/atoms/textarea';
import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftCreateContext } from '@/app/_provider/craft-create-provide';
import { CraftItemCreateContext } from '@/app/_provider/craft-item-create-provider';
import ImageUploaderWithText from '@/app/shared/modules/image-uploader/ImageUploaderWithText';
import Image from 'next/image';
import CraftWorkStatusModal from './craft-work-status-modal';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { WorkshopDefaultSettingIds } from '@/app/entities/workshops/types';
import { WORK_STEP_MAP } from '@/app/entities/crafts/constants';
import ReservationDateModal from './reservation-date-modal';

const CraftItemCreateDetail = () => {
  const { data: ids } = useQueryWithCredentials<WorkshopDefaultSettingIds>(
    'workshops/settings/ids'
  );
  const { form: craftCreateBodyAndTitle } = useFormFill(CraftCreateContext);
  const { form: craftItemCreateBody, fill: fillCraftItemCreateBody } =
    useFormFill(CraftItemCreateContext);
  const { openModal } = useModal();

  const getWorkStepKr = () => {
    const en = ids?.work_steps.find(
      (step) => step.id === craftItemCreateBody.work_step_id
    )?.step;
    return (
      en && (
        <span className='inline-flex gap-2'>
          <Image
            src={`/icon/workstep/ic-${en}-24px.svg`}
            width={16}
            height={16}
            alt={`${en} icon`}
          />
          {WORK_STEP_MAP[en]}
        </span>
      )
    );
  };

  const handleOpenModalUploadPicture = () => {
    openModal(
      <div className='w-full flex flex-wrap gap-2 items-center'>
        <ModalMenu onClick={() => {}} iconUrl='/icon/ic-gallery-black-24px.svg'>
          <ImageUploaderWithText
            onUpload={handleUpload}
            triggerText='앨범에서 선택하기'
          />
        </ModalMenu>
        <ModalMenu onClick={() => {}} iconUrl='/icon/ic-camera-24px.svg'>
          촬영하기
        </ModalMenu>
      </div>
    );
  };

  const handleOpenModalWorkStep = () => {
    openModal(<CraftWorkStatusModal />);
  };

  const handleOpenModalReservationDate = () => {
    openModal(<ReservationDateModal />);
  };

  const handleUpload = (url: string) => {
    fillCraftItemCreateBody({ picture: url });
  };

  const handleChangeTextArea = (content: string) => {
    fillCraftItemCreateBody({
      content,
    });
  };

  return (
    <div className='relative'>
      <Title size='large'>{craftCreateBodyAndTitle.title}</Title>
      <div
        onClick={handleOpenModalUploadPicture}
        className='my-4 bg-grey50 rounded-lg w-full h-[320px] overflow-hidden flex justify-center items-center'
      >
        {craftItemCreateBody.picture ? (
          <Image
            src={craftItemCreateBody.picture}
            width={320}
            height={320}
            alt='수강생 작품 사진'
            className='w-full h-full object-contain'
          />
        ) : (
          <IconPlusCircle />
        )}
      </div>

      <div className='flex gap-2'>
        <SelectLikeButton onClick={handleOpenModalWorkStep}>
          {craftItemCreateBody.work_step_id
            ? getWorkStepKr()
            : '작업 상태 선택'}
        </SelectLikeButton>
        <SelectLikeButton onClick={handleOpenModalReservationDate}>
          수업일 선택
        </SelectLikeButton>
      </div>

      <Textarea
        value={craftItemCreateBody.content}
        onChange={handleChangeTextArea}
        placeholder='작품을 설명해주세요'
        classNames='mt-4 w-full'
      />
      <PortalModal />
    </div>
  );
};

export default CraftItemCreateDetail;
