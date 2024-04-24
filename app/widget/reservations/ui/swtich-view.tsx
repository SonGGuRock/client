'use client';
import useToggle from '@/app/shared/lib/useToggle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// interface SwitchViewProps {
//   type: 'weekly' | 'monthly';
// }

export const SwitchView = () => {
  const { open: isMonthly, toggle } = useToggle();
  const { push } = useRouter();
  const goTo = (path: string) => {
    push(path);
  };
  const handleSwitch = () => {
    goTo(isMonthly ? '/reservations' : '/reservations/monthly');
    toggle();
  };

  return (
    <Image
      src={isMonthly ? '/icon/ic-week-24px.svg' : '/icon/ic-month-24px.svg'}
      alt='보기 방식 변경 버튼'
      width={24}
      height={24}
      onClick={handleSwitch}
    />
  );
};
