'use client';

import WorkshopAddressList from '@/app/widget/workshops/ui/workshop-address-list';
import SearchBorder from '../search-border';
import useSearchAddress from './useSearchAddress';
import { useRouter } from 'next/navigation';
import useWorkshopForm from '@/app/widget/workshops/lib/useWorkshopAddress';
import { useState } from 'react';
import { JusoRequestParams } from './type';

const SearchAddress = () => {
  const [addrRequestParams, setAddrRequestParams] = useState<JusoRequestParams>(
    {
      keyword: '',
      currentPage: 1,
    }
  );
  const { data, mutate } = useSearchAddress();

  const { setWorkshopForm } = useWorkshopForm();
  const router = useRouter();

  const handleClickSearch = (keyword: string) => {
    mutate({ keyword });
    setAddrRequestParams((prev) => {
      return { ...prev, keyword };
    });
  };

  const formattedAddressList = data?.data.results.juso?.map((juso) => {
    return { roadAddr: juso.roadAddr, jibunAddr: juso.jibunAddr };
  });

  const handleClickAddress = (addr: string) => {
    setWorkshopForm((prev) => {
      return prev && { ...prev, address: { ...prev.address, roadAddr: addr } };
    });
    router.push('/workshops/create');
  };

  const handleClickPageNumber = (pageNum: number) => {
    mutate({ keyword: addrRequestParams.keyword, currentPage: pageNum });
    setAddrRequestParams((prev) => {
      return { ...prev, currentPage: pageNum };
    });
  };

  return (
    <div>
      <SearchBorder
        placeholder='예) 홍익로3길, 언주로 850'
        onClickSearch={handleClickSearch}
      />
      <WorkshopAddressList
        address={formattedAddressList}
        currentPage={addrRequestParams.currentPage!}
        onClickAddress={handleClickAddress}
        onClickPageNumber={handleClickPageNumber}
      />
    </div>
  );
};

export default SearchAddress;
