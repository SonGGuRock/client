import clsx from 'clsx';
import Image from 'next/image';

type ExpandButtonProps = {
  onClick: () => void;
  expanded: boolean;
};

const ExpandButton = ({ onClick, expanded }: ExpandButtonProps) => {
  const chevronIconClasses = clsx({
    transform: expanded,
    'rotate-180': expanded,
  });

  return (
    <button
      onClick={onClick}
      className='my-4 text-sm text-grey600 flex align-center w-full justify-center'
    >
      {!expanded ? '펼치기' : '접기'}
      <Image
        className={chevronIconClasses}
        width={18}
        height={18}
        src='/icon/icon_chevron_down.svg'
        alt='펼치기 버튼'
      />
    </button>
  );
};

export default ExpandButton;
