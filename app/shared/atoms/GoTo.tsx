import Link from 'next/link';

export type goTo = {
  href: string;
  title: string;
};

export default function GoTo({ href, title }: goTo) {
  return (
    <Link href={href} className='text-grey text-sm flex absolute top-0 right-0'>
      {title}
      <span className='bg-goTo-icon w-[20px]'></span>
    </Link>
  );
}
