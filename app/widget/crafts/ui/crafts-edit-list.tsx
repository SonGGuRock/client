'use client';

import { useState } from 'react';
import CraftItem from './craft-item';
import { CraftThumbnailProps } from './craft-thumbnail';
import CheckBox from '@/app/shared/atoms/CheckBox';
import Image from 'next/image';
import PortalModal from '../../../shared/modules/modal/ui/PotalModal';
import useModal from '../../../shared/modules/modal/lib/useModal';
import CraftsEditModalContent from './crafts-edit-modal-content';
import useToast from '../../../shared/modules/toast/lib/useToast';
import Toast from '../../../shared/modules/toast/ui/Toast';
import { WorkStepType } from '@/app/shared/atoms/work-step-label';
import ModalContentInfoType from '@/app/shared/modules/modal/ui/modal-content-info-type';
import CraftFirstList from './craft-first-list';
import { useQueryWithCredentials } from '@/app/shared/api/fetch-with-credentials';
import { CraftSummaryList } from '@/app/entities/crafts/types';

const CraftsEditList = () => {
  const { toast, toggleToast } = useToast();
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedList, setSelectedList] = useState<number[]>([1, 2]);

  const { data: craftList } =
    useQueryWithCredentials<CraftSummaryList>('crafts');

  const handleSelectAll = () => {
    setSelectedList([1, 2, 3, 4, 5]);
  };

  const handleDeselect = () => {
    setSelectedList([]);
  };

  const isDeselectedAll = selectedList.length === 0;
  const handleCheckAll = () => {
    isDeselectedAll ? handleSelectAll() : handleDeselect();
  };

  const handleSelectItem = (id: number) => {
    selectedList.find((item) => item === id)
      ? setSelectedList((prev) => prev.filter((item) => item !== id))
      : setSelectedList((prev) => [...prev, id]);
  };

  const handleOnEditModal = () => {
    openModal(
      <CraftsEditModalContent
        onClick={(workstep: WorkStepType['ko']) =>
          toggleToast({
            text: `${selectedList.length} 작품을 ${workstep}로 이동했어요`,
          })
        }
      />
    );
  };

  const handleOnDeleteModal = () => {
    openModal(
      <ModalContentInfoType
        text='선택하신 작품을 삭제하시겠습니까?'
        primaryButtonText='삭제'
        secondaryButtonText='취소'
        onClickPrimary={() => {}}
        onClickSecondary={closeModal}
      />
    );
  };

  if (!craftList) return <div>loading now</div>;

  return (
    <div>
      <div
        className='mt-6 px-4 flex gap-2 items-center'
        onClick={handleCheckAll}
      >
        <CheckBox
          isChecked={!isDeselectedAll}
          style='grey'
          classNames='opacity-50 bg-grey900'
        />
        <label className='text-sm text-grey900'>
          {!isDeselectedAll ? '선택해제' : '전체선택'}
        </label>
      </div>

      {/* <CraftFirstList craftList={craftList.crafts} /> */}
      {/* <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
        {Crafts_temp.map((craft) => (
          <CraftItem
            key={craft}
            onClick={handleSelectItem}
            isEditMode
            isChecked={!!selectedList.find((id) => id === craft)}
            craft={craft}
          />
        ))}
      </div> */}

      <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
        {craftList.crafts.map((craft) => (
          <CraftItem
            key={craft.id}
            craft={craft}
            onClick={() => {
              handleSelectItem(craft.id);
            }}
            isEditMode={true}
            isChecked={}
          />
        ))}
      </div>

      {toast && <Toast {...toast} />}

      {!isOpen && (
        <div className='absolute bottom-0 left-0 w-full h-16 bg-brown flex justify-between'>
          {!isDeselectedAll && (
            <span className='absolute top-[-32px] left-4 inline-flex justify-center items-center w-11 h-11 rounded-full bg-yellowBeige text-base text-grey900 font-bold'>
              {selectedList.length}
            </span>
          )}
          <div
            onClick={handleOnEditModal}
            className={`w-full text-white text-xs inline-flex flex-col gap-1 flex-wrap justify-center items-center ${
              isDeselectedAll && 'opacity-50'
            }`}
          >
            <Image
              src={'/icon/ic-move-24px.svg'}
              alt='이동 아이콘'
              width={24}
              height={24}
            />
            <p className='w-full text-center'>이동</p>
          </div>
          <div
            className={`w-full text-white text-xs inline-flex flex-col gap-1 flex-wrap justify-center items-center ${
              isDeselectedAll && 'opacity-50'
            }`}
            onClick={handleOnDeleteModal}
          >
            <Image
              src={'/icon/ic-delete-24px-white.svg'}
              alt='삭제 아이콘'
              width={24}
              height={24}
            />
            <p className='w-full text-center'>삭제</p>
          </div>
        </div>
      )}
      <PortalModal />
    </div>
  );
};
export default CraftsEditList;
