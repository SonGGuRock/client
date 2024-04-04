'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CloseButtonProps {
  className?: string;
}

const CloseButton = ({ className }: CloseButtonProps) => {
  const router = useRouter();
  return (
    <div
      className={`w-fit h-12 flex items-center justify-center ${className}`}
      onClick={() => router.back()}
    >
      <Image
        src='/icon/ic-close-24px.svg'
        alt='닫기 버튼 아이콘'
        width={24}
        height={24}
      />
    </div>
  );
};

export default CloseButton;
