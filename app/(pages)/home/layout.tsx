import { Metadata } from 'next';
import BottomBar from '../../shared/modules/BottomBar';

export const metadata: Metadata = {
  title: 'OOO 님, 손으로 만드는 즐거움만 느끼세요! ',
  description: '공방 이용자 대시보드 ',
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
