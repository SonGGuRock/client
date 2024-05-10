import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  style?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  icon?: ReactNode;
}

const Button = ({
  className,
  style = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  type,
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
      'bg-sand': !disabled && style === 'primary',
      'text-white': style === 'primary' || disabled,
    },
    {
      'bg-white': style === 'secondary',
      'text-grey900': style === 'secondary',
      border: style === 'secondary',
      'border-sand': style === 'secondary',
      'border-solid': style === 'secondary',
    },
    {
      'bg-grey200': disabled,
    }
  );

  return (
    <button
      type={type}
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
