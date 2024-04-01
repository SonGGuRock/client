import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface SettingMenuLinkTextProps extends PropsWithChildren {
  linkText: string;
  href: string;
}

export const SettingMenuLinkText = ({
  href,
  children,
  linkText,
}: SettingMenuLinkTextProps) => {
  return (
    <li>
      <Link href={href} className='flex justify-between'>
        {children}
        <div className='flex gap-1 justify-between items-center'>
          <span className='text-brown font-bold text-sm'>{linkText}</span>
          <Image
            src='/icon/ic-arrow-right-20px.svg'
            alt=' 이동용 화살표 아이콘'
            width={18}
            height={18}
          />
        </div>
      </Link>
    </li>
  );
};
