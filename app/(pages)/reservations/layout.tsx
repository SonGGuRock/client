import ReservationsHeader from '@/app/widget/reservations/ui/reservations-header';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-beige'>
      <ReservationsHeader />

      {children}
    </div>
  );
};

export default Layout;
