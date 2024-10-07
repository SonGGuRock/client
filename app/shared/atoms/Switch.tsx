'use client';

import clsx from 'clsx';
import { useState } from 'react';

export interface SwitchProps {
  isActive: boolean;
  onSwitch: (value: boolean) => void;
}
const Switch = ({ isActive, onSwitch }: SwitchProps) => {
  const [active, toggle] = useState(!isActive);

  const handlerChange = () => {
    toggle((prev) => !prev);
    onSwitch(active);
  };

  const switchClasses = clsx(
    {
      'before:translate-x-4': !active,
      'before:translate-x-0': active,
    },
    {
      'bg-brown': !active,
      'bg-grey200': active,
    }
  );

  return (
    <label className='relative inline-block w-10 h-6 '>
      <input
        checked={active}
        onChange={handlerChange}
        type='checkbox'
        className='opacity-0 w-0 h-0'
      />
      <span
        className={`transition-transform absolute inset-0  rounded-xl before:transition-transform before:block before:absolute before:top-[2px] before:left-[2px] before:h-5 before:w-5 before:bg-white before:rounded-full ${switchClasses}`}
      ></span>
    </label>
  );
};
export default Switch;
