'use client';

import Title from '@/app/shared/atoms/Title';
import Button from '@/app/shared/atoms/button/Button';
import DropDown from '@/app/shared/atoms/drop-down';
import DateWeeklySwiper from '../reservations-weekly-swiper';
import useModal from '@/app/shared/modules/modal/lib/useModal';
import { useState } from 'react';
import { ReservationAddRequestBody, Student } from '@/app/lib-temp/definition';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import useToast from '@/app/shared/modules/toast/lib/useToast';
import { useQueryClient } from '@tanstack/react-query';
import getDateArray from '@/app/shared/lib/getDateArray';
import getDayName from '@/app/shared/lib/getDayName';
import { DailyItemDate } from '../reservations-daily-item';

interface ReservationAddModalProps {
  studentId: Student['id'];
  onAddSuccess: (count: number) => void;
}

const ReservationAddModal = ({
  studentId,
  onAddSuccess,
}: ReservationAddModalProps) => {
  const [addBody, setAddBody] = useState<ReservationAddRequestBody>({
    class_count: 1,
    payment_date: '',
  });
  const { mutate } = useMutateWithCrendetials<ReservationAddRequestBody>(
    `/students/${studentId}/addition`
  );
  const { closeModal } = useModal();

  const queryClient = useQueryClient();

  const handleAddButton = () => {
    mutate(
      { method: 'POST', body: addBody },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey.some((key) => {
                return (
                  typeof key === 'string' &&
                  key.includes(`students/${studentId}` || 'students')
                );
              });
            },
          });

          closeModal();
          onAddSuccess(addBody.class_count);
        },
      }
    );
  };

  const handleChangeSelect = (value: string) => {
    setAddBody((prev) => ({ ...prev, class_count: Number(value) }));
  };

  const handleSelectPaymentDate = (date: string) => {
    setAddBody((prev) => ({ ...prev, payment_date: date }));
  };

  return (
    <div>
      <Title classNames='mb-4'>수강횟수 추가</Title>
      <DropDown
        classNames='border border-grey200 py-2 rounded-md min-w-16 flex justify-between'
        onChange={handleChangeSelect}
        defaultValue='1'
      >
        <DropDown.Option value='1'>1</DropDown.Option>
        <DropDown.Option value='2'>2</DropDown.Option>
        <DropDown.Option value='3'>3</DropDown.Option>
        <DropDown.Option value='4'>4</DropDown.Option>
      </DropDown>

      <Title classNames='mt-8 mb-2'>결제일 선택</Title>
      <DateWeeklySwiper
        days={getDateArray({ beforeCount: 4, afterCount: 3 }).map((date) => {
          return {
            date,
            day_name: getDayName(new Date(date)) as DailyItemDate['day_name'],
          };
        })}
        style='item-primary'
        onClick={handleSelectPaymentDate}
        selectedItem={addBody.payment_date}
        // isWithTimeCrowds={false}
      />
      <div className='w-full flex gap-2'>
        <Button size='large' style='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button size='large' style='primary' onClick={handleAddButton}>
          추가
        </Button>
      </div>
    </div>
  );
};

export default ReservationAddModal;
