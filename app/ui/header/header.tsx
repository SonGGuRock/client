import Image from 'next/image';

export default function Header() {
  return (
    <header className='h-[60px] flex items-center justify-between'>
      <h1 className='font-bold text-xl text-sand'>손꾸락</h1>
      <Image
        src='/icon_bell.png'
        alt='icon of the bell'
        width={24}
        height={24}
      />
    </header>
  );
}
