'use client';

import clsx from 'clsx';
import { useState } from 'react';

const Switch = () => {
  const [disabled, toggle] = useState(true);

  const handlerChange = () => {
    toggle((prev) => !prev);
  };

  const switchClasses = clsx(
    {
      'before:translate-x-4': !disabled,
      'before:translate-x-0': disabled,
    },
    {
      'bg-brown': !disabled,
      'bg-grey200': disabled,
    }
  );

  return (
    <label className='relative inline-block w-10 h-6 '>
      <input
        checked={disabled}
        onChange={handlerChange}
        type='checkbox'
        className='opacity-0 w-0 h-0'
      />
      <span
        className={`transition-transform absolute inset-0 rounded-lg rounded-xl before:transition-transform before:block before:absolute before:top-[2px] before:left-[2px] before:h-5 before:w-5 before:bg-white before:rounded-full ${switchClasses}`}
      ></span>
    </label>
  );
};
export default Switch;
