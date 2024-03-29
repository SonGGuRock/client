import Image from 'next/image';

type ModalMenuProps = {
  text: string;
  iconUrl: string;
  onClick: () => void;
  iconWidth?: number;
  iconHeight?: number;
  type?: 'primary' | 'secondary';
};

const ModalMenu = ({
  text,
  iconUrl,
  onClick,
  iconWidth,
  iconHeight,
  type = 'primary',
}: ModalMenuProps) => {
  return (
    <div
      onClick={onClick}
      className='w-full text-sm flex items-center gap-2 py-4'
    >
      <Image
        className={type === 'secondary' ? 'text-red' : 'text-grey800'}
        src={iconUrl}
        alt={text}
        width={iconWidth ?? 24}
        height={iconHeight ?? 24}
      />
      <span className={type === 'secondary' ? 'text-red' : 'text-grey800'}>
        {text}
      </span>
    </div>
  );
};

export default ModalMenu;
