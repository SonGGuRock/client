import { Metadata } from 'next';
import BottomBar from '../ui/shared/modules/BottomBar';

export const metadata: Metadata = {
  title: '손꾸락 - 알림 ',
  description: '작품, 수업, 수강생에 대한 알림을 관리합니다 ',
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
