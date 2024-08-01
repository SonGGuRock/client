import AuthEmailProvider from '@/app/_provider/auth-email-provider';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative px-4 min-h-screen'>
      <AuthEmailProvider>{children}</AuthEmailProvider>
    </div>
  );
}
