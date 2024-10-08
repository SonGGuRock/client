'use client';

import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';

export const SwitchView = () => {
  const params = useParams();
  const date = params.date as string;
  const path = usePathname();
  const isMonthly = path.includes('monthly');
  const { push } = useRouter();
  const goTo = (path: string) => {
    push(path);
  };
  const handleSwitch = () => {
    goTo(isMonthly ? `/reservations/${date}` : `/reservations/${date}/monthly`);
  };

  return (
    <Image
      src={isMonthly ? '/icon/ic-week-24px.svg' : '/icon/ic-month-24px.svg'}
      alt='보기 방식 변경 버튼'
      width={24}
      height={24}
      onClick={handleSwitch}
      className='cursor-pointer'
    />
  );
};
