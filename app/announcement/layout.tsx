import { Metadata } from 'next';
import BottomBar from '../ui/shared/modules/BottomBar';

export const metadata: Metadata = {
  title: '손꾸락 - 공지 페이지',
  description: '공방 운영에 필요한 공지를 관리하세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative'>
      {children}
      <BottomBar />
    </div>
  );
}
