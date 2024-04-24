import { Metadata } from 'next';
import NotificationCategoryProvider from '@/app/_provider/notification-category-provider';

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
    <div>
      <NotificationCategoryProvider>{children}</NotificationCategoryProvider>
    </div>
  );
}
