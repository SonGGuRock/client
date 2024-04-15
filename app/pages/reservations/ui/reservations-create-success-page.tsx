import SubmissionSuccess from '@/app/shared/ui/modules/success';

const ReservationsCreateSuccessPage = () => {
  const fields = [
    { label: '수강생', value: '이수아' },
    { label: '수강날짜', value: '2024. 02. 05' },
    { label: '수강시간', value: '12-15시' },
    { label: '작업종류', value: '물레' },
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
          href='/reservations'
          classNames='w-full absolute bottom-9 left-0 px-4'
        />
      </SubmissionSuccess>
    </>
  );
};

export default ReservationsCreateSuccessPage;
