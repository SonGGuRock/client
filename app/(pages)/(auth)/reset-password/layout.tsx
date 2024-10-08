import AuthEmailProvider from '@/app/_provider/auth-email-provider';
import Header from '@/app/shared/modules/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative px-4 min-h-screen'>
      <Header>
        <div className='flex gap-1 items-center'>
          <Header.Back />
          <Header.Title>비밀번호 재설정</Header.Title>
        </div>
      </Header>
      <AuthEmailProvider>{children}</AuthEmailProvider>
    </div>
  );
}
