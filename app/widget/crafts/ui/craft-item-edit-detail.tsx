'use client';

import useFormFill from '@/app/shared/modules/stepper/lib/use-form-fill';
import { CraftItemMutateContext } from '@/app/_provider/craft-item-create-provider';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import { useEffect, useState } from 'react';
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
import { WORK_STEP_MAP } from '@/app/entities/crafts/constants';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftItemDetail } from '@/app/entities/crafts/types';
import { useParams } from 'next/navigation';

const CraftItemEditDetail = () => {
  const params = useParams();
  const craftId = params['id'] as string;
  const itemId = params['itemId'] as string;
  const { data: craftDetail } = useQueryWithCredentials<CraftItemDetail>(
    `/crafts/items/${itemId}`
  );
  const { form, fill: fillCraftItemCreateBody } = useFormFill(
    CraftItemMutateContext
  );
  const { getWorkStepEn, getWorkStepKrWithIcon } = useWorkStep();

  const { openModal } = useModal(); 

  const [reservationDate, setReservationDate] = useState(
    craftDetail?.reservation_date
  );

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

  const handleOpenModalReservationDate = (studentId: number) => {
    openModal(
      <ReservationDateModal
        studentId={studentId}
        onSelectDate={(id, date) => {
          setReservationDate(date);
          fillCraftItemCreateBody({ reservation_id: id });
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

  useEffect(() => {
    fillCraftItemCreateBody({
      picture: craftDetail?.picture,
      content: craftDetail?.content,
      work_step_id: craftDetail?.work_step,
    });
  }, [craftDetail]);

  if (!craftDetail) return <div>loading</div>;

  return (
    <div className='relative'>
      <Title size='small'>
        {craftDetail?.craft_name}&nbsp;&nbsp;&nbsp;
        {WORK_STEP_MAP[getWorkStepEn(craftDetail?.work_step!)!]}&nbsp;
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
          {form?.work_step_id
            ? getWorkStepKrWithIcon(form.work_step_id)
            : '작업 상태 선택'}
        </SelectLikeButton>
        <SelectLikeButton
          onClick={() => {
            handleOpenModalReservationDate(craftDetail.student.id);
          }}
        >
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
