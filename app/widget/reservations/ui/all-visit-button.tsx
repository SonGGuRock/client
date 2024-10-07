import Image from 'next/image';
import Link from 'next/link';

interface AllVisitButtonProps {
  studentId: number;
  studentName: string;
}

const AllVisitButton = ({ studentId, studentName }: AllVisitButtonProps) => {
  return (
    <Link
      href={`/students/${studentId}/visit?name=${studentName}`}
      className='border border-grey150 w-full py-3 flex justify-center gap-1 itmes-center rounded-lg'
    >
      <Image
        src='/icon/ic-calendar-24px.svg'
        alt='달력 아이콘'
        width={24}
        height={24}
      />
      <span className='text-sm text-grey700'>출석현황 전체보기</span>
    </Link>
  );
};

export default AllVisitButton;
