import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface ModalMenuProps extends PropsWithChildren {
  iconUrl: string;
  onClick: () => void;
  iconWidth?: number;
  iconHeight?: number;
  type?: 'primary' | 'secondary';
}

const ModalMenu = ({
  iconUrl,
  onClick,
  iconWidth,
  iconHeight,
  type = 'primary',
  children,
}: ModalMenuProps) => {
  return (
    <div
      onClick={onClick}
      className='w-full text-sm flex items-center gap-2 py-3'
    >
      <Image
        className={type === 'secondary' ? 'text-red' : 'text-grey800'}
        src={iconUrl}
        alt='모달 메뉴'
        width={iconWidth ?? 24}
        height={iconHeight ?? 24}
      />
      <span className={type === 'secondary' ? 'text-red' : 'text-grey800'}>
        {children}
      </span>
    </div>
  );
};

export default ModalMenu;
