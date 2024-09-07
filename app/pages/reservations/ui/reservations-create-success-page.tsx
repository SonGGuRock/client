'use client';

import { ReservationCreateContext } from '@/app/_provider/reservation-create-provider';
import { getFullToday } from '@/app/shared/lib/getToday';
import SubmissionSuccess from '@/app/shared/modules/success';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

const classTimeeMap = new Map();
classTimeeMap.set(0, '09-12시');
classTimeeMap.set(1, '12-15시');

const workTypeMap = new Map();
workTypeMap.set(0, '물레');
workTypeMap.set(1, '핸드빌딩');

const ReservationsCreateSuccessPage = () => {
  const params = useParams();
  const name = params.name as string;

  const context = useContext(ReservationCreateContext);
  if (!context) {
    return <div>수업 등록 실패</div>;
  }

  const { form } = context;
  const fields = [
    { label: '수강생', value: decodeURIComponent(name) },
    { label: '수강날짜', value: form.reservation_date },
    { label: '수강시간', value: classTimeeMap.get(form.class_time_id) },
    { label: '작업종류', value: workTypeMap.get(form.work_type_id) },
  ];

  return (
    <>
      <SubmissionSuccess>
        <SubmissionSuccess.Notice>수업이 등록되었어요</SubmissionSuccess.Notice>
        <SubmissionSuccess.Infomation fields={fields} classNames='mt-8 mb-6' />
        <SubmissionSuccess.Guide>
          수업 취소는 수강생 프로필에서 가능해요
        </SubmissionSuccess.Guide>
        <SubmissionSuccess.Button
          href={`/reservations/${getFullToday()}`}
          classNames='w-full absolute bottom-9 left-0 px-4'
        />
      </SubmissionSuccess>
    </>
  );
};

export default ReservationsCreateSuccessPage;
