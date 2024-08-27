import ReservationCreateProvider from '@/app/_provider/reservation-create-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <ReservationCreateProvider>{children}</ReservationCreateProvider>;
};

export default Layout;
