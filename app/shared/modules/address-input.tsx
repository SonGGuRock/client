'use client';

import Link from 'next/link';
import IconArrowRight from '../atoms/icons/icon-arrow-right';
import { ChangeEvent } from 'react';
import useWorkshopForm from '@/app/widget/workshops/lib/useWorkshopAddress';

const AddressInput = () => {
  const {
    workshopForm: { address },
    setWorkshopForm,
  } = useWorkshopForm();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkshopForm(
      (prev) =>
        prev && {
          ...prev,
          address: {
            roadAddr: prev.address?.roadAddr,
            restAddr: e.target.value,
          },
        }
    );
  };

  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>주소</label>
      {!address || !address.roadAddr || address.roadAddr.length === 0 ? (
        <Link
          href='/workshops/create/search/address'
          className='w-full text-base text-grey300 border-b border-grey100 py-2 flex justify-between'
        >
          여기를 눌러 주소를 검색해주세요
          <IconArrowRight />
        </Link>
      ) : (
        <input
          readOnly
          value={address?.roadAddr}
          className='w-full text-base text-grey900 border-b border-grey100 py-2'
        />
      )}
      <input
        className='w-full text-base text-grey900 placeholder-grey300 border-b border-grey100 py-2'
        placeholder='상세 주소를 입력해주세요'
        value={address?.restAddr}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressInput;
