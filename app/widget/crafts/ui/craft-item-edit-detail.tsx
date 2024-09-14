'use client';

import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import { useState } from 'react';
import ModalMenu from '@/app/shared/modules/modal/ui/ModalMenu';
import ImageUploaderWithText from '@/app/shared/modules/image-uploader/ImageUploaderWithText';
import CraftWorkStatusModal from './craft-work-status-modal';
import ReservationDateModal from './reservation-date-modal';
import Title from '@/app/shared/atoms/Title';
import Image from 'next/image';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import SelectLikeButton from '@/app/shared/atoms/select-like-button';
import Textarea from '@/app/shared/atoms/textarea';
import PortalModal from '@/app/shared/modules/modal/ui/PotalModal';
import useWorkStep from '@/app/entities/crafts/hooks/useWorkStep';
import { CraftItemDetail } from '@/app/entities/crafts/types';
import { WORK_STEP_MAP } from '@/app/entities/crafts/constants';

// interface CraftItemEditDetailProps {
//   craftDetail: Pick<
//     CraftItemDetail,
//     'id' | 'picture' | 'craft_name' | 'updated_at' | 'content' | 'work_step'
//   >;
// }

const CraftItemEditDetail = () => {
  const { form, fill: fillCraftItemCreateBody } = useFormFill(
    CraftItemMutateContext
  );
  const { getWorkStepEn, getWorkStepKrWithIcon } = useWorkStep();

  const { openModal } = useModal();
  const [reservationDate, setReservationDate] = useState<string | null>(null);

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
    openModal(
      <ReservationDateModal
        onSelectDate={(date) => {
          setReservationDate(date);
        }}
      />
    );
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
      <Title size='medium'>
        craft name의{' '}
        {form.work_step_id
          ? WORK_STEP_MAP[getWorkStepEn(form.work_step_id)!]
          : ''}
      </Title>
      <div
        onClick={handleOpenModalUploadPicture}
        className='my-4 bg-grey50 rounded-lg w-full h-[320px] overflow-hidden flex justify-center items-center'
      >
        {form.picture ? (
          <Image
            src={form.picture}
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
          {form.work_step_id
            ? getWorkStepKrWithIcon(form.work_step_id)
            : '작업 상태 선택'}
        </SelectLikeButton>
        <SelectLikeButton onClick={handleOpenModalReservationDate}>
          {reservationDate ?? '수업일 선택'}
        </SelectLikeButton>
      </div>

      <Textarea
        value={form.content}
        onChange={handleChangeTextArea}
        placeholder='작품을 설명해주세요'
        classNames='mt-4 w-full'
      />
      <PortalModal />
    </div>
  );
};

export default CraftItemEditDetail;
