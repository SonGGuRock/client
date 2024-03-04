import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const primaryFont = localFont({
  src: [
    {
      path: './font/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: './font/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: './font/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: './font/Pretendard-Semibold.woff2',
      weight: '600',
    },
    {
      path: './font/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '손꾸락 | 손으로 만드는 즐거움만 느끼세요! ',
  description: '공방 이용 및 관리 서비스 ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
