import { PropsWithChildren } from 'react';

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={`${className} rounded-lg text-xs font-bold py-[2px] px-[6px]`}
    >
      {children}
    </span>
  );
};

export default Badge;
