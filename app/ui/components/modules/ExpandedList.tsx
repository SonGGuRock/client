'use client';

import { ReactNode, useState } from 'react';
import ExpandButton from '../atoms/ExpandButton';

type ExpandedListProps = {
  children: ReactNode;
};

function ExpandedList({ children }: ExpandedListProps) {
  const [expanded, SetExpanded] = useState(false);
  const handleClick = () => {
    SetExpanded((prev) => !prev);
  };

  return (
    <ul className='w-full flex flex-wrap gap-2 mt-2'>
      {!!expanded && children}
      <ExpandButton expanded={expanded} onClick={handleClick} />
    </ul>
  );
}

export default ExpandedList;
