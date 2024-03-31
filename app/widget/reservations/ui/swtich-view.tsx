'use client';
import useToggle from '@/app/hooks/useToggle';
import Image from 'next/image';
import Link from 'next/link';

// interface SwitchViewProps {
//   type: 'weekly' | 'monthly';
// }

export const SwitchView = () => {
  const { open: isWeekly } = useToggle();
  return (
    <Link href={isWeekly === true ? '/reservations' : '/reservations/monthly'}>
      <Image
        src={
          isWeekly === true
            ? '/icon/ic-month-24px.svg'
            : '/icon/ic-week-24px.svg'
        }
        alt='보기 방식 변경 버튼'
        width={24}
        height={24}
      />
    </Link>
  );
};
