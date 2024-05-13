'use client';

import Link from 'next/link';
import IconArrowRight from '../atoms/icons/icon-arrow-right';
import { ChangeEvent, useState } from 'react';

const AddressInput = () => {
  const [address, setAddress] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <label className='w-full text-grey700 text-sm font-bold'>주소</label>
      <Link
        href='/workshops/search/address'
        className='w-full text-base text-grey300 border-b border-grey100 py-2 flex justify-between'
      >
        여기를 눌러 주소를 검색해주세요
        <IconArrowRight />
      </Link>
      <input
        name='address'
        className='w-full text-base text-grey300 placeholder-grey300 border-b border-grey100 py-2'
        placeholder='상세 주소를 입력해주세요'
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressInput;
