'use client';

import CheckListItem from '@/app/shared/modules/chek-list-item';
import initialReasonList, {
  WitdrawalReason,
} from '../const/initial-reason-list';
import Input from '@/app/shared/atoms/Input';
import { ChangeEvent, useState } from 'react';
import Button from '@/app/shared/atoms/button/Button';
import useWithdrawal from '../../mypage/api/useWithdrawal';
import { useRouter } from 'next/navigation';

const WithdrawalReasonList = () => {
  const { mutate } = useWithdrawal();
  const router = useRouter();

  const [reasonList, setReasonList] =
    useState<WitdrawalReason[]>(initialReasonList);

  const handleCheck = (id: number) => {
    setReasonList((prev) => {
      const updated = prev.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      });
      return updated;
    });
  };

  const handleEtcChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReasonList((prev) => {
      const updated = prev.map((item) => {
        return item.reason === '기타'
          ? { ...item, detail: e.target.value }
          : item;
      });
      return updated;
    });
  };

  const handleCancle = () => {
    router.back();
  };

  const handleWithdrawal = () => {
    mutate();
  };

  return (
    <div className='mt-12'>
      {reasonList.map((item) => (
        <CheckListItem
          key={item.id}
          classNames='w-full flex gap-2 items-center'
          isChecked={item.checked}
          onCheck={() => {
            handleCheck(item.id);
          }}
        >
          {item.reason !== '기타' ? (
            item.reason
          ) : (
            <span className='flex w-full gap-2 items-center'>
              <span className='min-w-10'>기타 :</span>
              <Input
                placeholder='사유 입력'
                onChange={handleEtcChange}
                // isReadOnly={!item.checked}
              />
            </span>
          )}
        </CheckListItem>
      ))}

      <div className='w-full flex gap-2 mt-[108px]'>
        <Button
          size='large'
          className='border-0 bg-grey200 font-semibold'
          onClick={handleCancle}
        >
          취소
        </Button>
        <Button
          size='large'
          className='bg-error text-white font-semibold'
          onClick={handleWithdrawal}
        >
          탈퇴
        </Button>
      </div>
    </div>
  );
};

export default WithdrawalReasonList;
