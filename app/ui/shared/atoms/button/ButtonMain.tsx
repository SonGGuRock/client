import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ButtonMainProps extends PropsWithChildren {
  type?: 'primary' | 'secodnary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonMain = ({
  type = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  children,
}: ButtonMainProps) => {
  const buttonClasses = clsx(
    'font-bold',
    'rounded-lg',
    'py-[14px]',
    'px-[12px]',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-1',
    'text-sm',
    'h-fit',
    {
      'py-[6px]': size === 'small',
      'px-3': (size = 'small'),
      'text-xs': (size = 'small'),
    },
    {
      'bg-sand': type === 'primary',
      'text-white': type === 'primary' || disabled,
    },
    {
      'bg-white': type === 'secodnary',
      'text-grey900': type === 'secodnary',
      border: type === 'secodnary',
      'border-sand': type === 'secodnary',
      'border-solid': type === 'secodnary',
    },
    {
      'bg-grey200': disabled,
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonMain;
