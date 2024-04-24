import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <header className='h-[60px] flex items-center justify-between'>
      <h1 className='font-bold text-xl text-sand'></h1>
      <Link href='/notification'>
        <Image
          src='/icon/icon_bell.png'
          alt='icon of the bell'
          width={24}
          height={24}
        />
      </Link>
    </header>
  );
}
