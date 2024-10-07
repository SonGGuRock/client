import Link from 'next/link';

const CraftsEditButton = () => {
  return (
    <Link href='/crafts/edit' className='text-grey700 text-sm font-bold'>
      편집
    </Link>
  );
};

export default CraftsEditButton;
