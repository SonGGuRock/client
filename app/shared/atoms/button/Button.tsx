import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

const Button = ({
  className,
  type = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  icon,
}: ButtonProps) => {
  const buttonClasses = clsx(
    'font-bold',
    'rounded-lg',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-1',
    'h-fit',
    {
      'w-full': size === 'large',
      'text-sm': size === 'large',
      'py-[14px]': size === 'large',
    },
    {
      'py-[14px]': size === 'medium',
      'px-[12px]': size === 'medium',
      'text-sm': size === 'medium',
    },
    {
      'py-[6px]': size === 'small',
      'px-3': size === 'small',
      'text-xs': size === 'small',
    },
    {
      'bg-sand': !disabled && type === 'primary',
      'text-white': type === 'primary' || disabled,
    },
    {
      'bg-white': type === 'secondary',
      'text-grey900': type === 'secondary',
      border: type === 'secondary',
      'border-sand': type === 'secondary',
      'border-solid': type === 'secondary',
    },
    {
      'bg-grey200': disabled,
    }
  );

  return (
    <button
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
