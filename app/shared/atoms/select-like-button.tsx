'use client';

import { PropsWithChildren } from 'react';
import IconArrowDown from './icons/icon-arrow-down';

interface SelectLikeButtonProps extends PropsWithChildren {
  classNames?: string;
  onClick: () => void;
}

const SelectLikeButton = ({
  children,
  classNames,
  onClick,
}: SelectLikeButtonProps) => (
  <button
    onClick={onClick}
    className={`border border-grey200 rounded-lg py-2 px-3 inline-flex gap-2 font-bold text-sm text-grey700 ${classNames}`}
  >
    {children} <IconArrowDown />
  </button>
);

export default SelectLikeButton;
