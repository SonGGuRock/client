import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface SettingMenuLinkProps extends PropsWithChildren {
  href: string;
}

export const SettingMenuLink = ({ href, children }: SettingMenuLinkProps) => {
  return (
    <li>
      <Link href={href} className='flex justify-between'>
        {children}
        <Image
          src='icon/ic-arrow-right-20px.svg'
          alt=' 이동용 화살표 아이콘'
          width={18}
          height={18}
        />
      </Link>
    </li>
  );
};
