import Image from 'next/image';

type BottomSheetMenuProps = {
  text: string;
  iconUrl: string;
  onClick: () => void;
  iconWidth?: number;
  iconHeight?: number;
  type?: 'primary' | 'secondary';
};

const BottomSheetMenu = ({
  text,
  iconUrl,
  onClick,
  iconWidth,
  iconHeight,
  type = 'primary',
}: BottomSheetMenuProps) => {
  return (
    <div
      onClick={onClick}
      className='w-full text-sm flex items-center gap-2 h-8'
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

export default BottomSheetMenu;
