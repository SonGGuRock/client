import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ModalProvider from './_provider/modal-provider';

const primaryFont = localFont({
  src: [
    {
      path: '../public/fonts/pretendard-light.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/pretendard-regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/pretendard-medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/pretendard-semibold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/pretendard-bold.woff2',
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
      <body
        className={`${primaryFont.className} min-w-[375px] min-h-screen max-w-sm m-auto`}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
