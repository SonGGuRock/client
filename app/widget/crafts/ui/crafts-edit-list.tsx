'use client';

import { useState } from 'react';
import CraftItem from './craft-item';
import { CraftThumbnailProps } from './craft-thumbnail';
import CheckBox from '@/app/shared/atoms/CheckBox';
import Image from 'next/image';
import PortalModal from '../../modal/ui/PotalModal';
import useModal from '../../modal/lib/useModal';
import CraftsEditModalContent from './crafts-edit-modal-content';

const Crafts_temp = [1, 2, 3, 4, 5];

const CraftsEditList = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedList, setSelectedList] = useState<
    CraftThumbnailProps['craftId'][]
  >([1, 2]);

  const handleSelectAll = () => {
    setSelectedList([1, 2, 3, 4, 5]);
  };

  const handleDeselect = () => {
    setSelectedList([]);
  };

  const isDeselectedAll = selectedList.length === 0;
  const handleCheck = () => {
    isDeselectedAll ? handleSelectAll() : handleDeselect();
  };

  const handleSelectItem = (id: number) => {
    selectedList.find((item) => item === id)
      ? setSelectedList((prev) => prev.filter((item) => item !== id))
      : setSelectedList((prev) => [...prev, id]);
  };

  const handleOnEditModal = () => {
    console.log('hi');
    openModal(<CraftsEditModalContent />);
  };
  return (
    <div>
      <div className='mt-6 px-4 flex gap-2 items-center' onClick={handleCheck}>
        <CheckBox
          isChecked={!isDeselectedAll}
          style='grey'
          classNames='opacity-50 bg-grey900'
        />
        <label className='text-sm text-grey900'>
          {!isDeselectedAll ? '선택해제' : '전체선택'}
        </label>
      </div>
      <div className='mt-4 px-4 grid grid-cols-3 gap-x-2 gap-y-6'>
        {Crafts_temp.map((craft) => (
          <CraftItem
            key={craft}
            onClick={handleSelectItem}
            isEditMode
            isChecked={!!selectedList.find((id) => id === craft)}
            craftId={craft}
          />
        ))}
      </div>

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
