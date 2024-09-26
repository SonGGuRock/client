import { CraftStatus } from '@/app/entities/crafts/types';
import Link from 'next/link';

interface CraftsEditButtonProps {
  status: CraftStatus;
}

const CraftsEditButton = ({ status }: CraftsEditButtonProps) => {
  return (
    <Link
      href={`/crafts/edit?status=${status}`}
      className='text-grey700 text-sm font-bold'
    >
      편집
    </Link>
  );
};

export default CraftsEditButton;
