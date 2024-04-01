import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface TabMenuProps extends PropsWithChildren {
  active: boolean;
  onClick: () => void;
}

const TabMenu = ({ children, active, onClick }: TabMenuProps) => {
  const MenuClasses = clsx(
    'text-base ',
    'font-bold',
    'pb-2',
    {
      'text-brown': active === true,
      'border-brown': active === true,
      'border-b-2': active === true,
    },
    {
      'text-grey300': active === false,
      'border-none': active === false,
    }
  );
  return (
    <button onClick={onClick} className={MenuClasses}>
      {children}
    </button>
  );
};

export default TabMenu;
