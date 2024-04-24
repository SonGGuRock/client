'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ClassNamesProps } from '@/app/widget/reservations/ui/class-time-picker';

interface BackProps extends ClassNamesProps {
  text?: string;
  onClick?: () => void;
}
const Back = ({ text, onClick, classNames }: BackProps) => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <div
      className={`w-fit h-12 flex items-center justify-center ${classNames}`}
      onClick={onClick ?? goBack}
    >
      {text ? (
        <span className='w-fit text-base'>{text}</span>
      ) : (
        <Image
          src='/icon/ic-arrow_left-24px.svg'
          alt='뒤로 가기'
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default Back;
