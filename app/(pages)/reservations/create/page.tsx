import ReservationCreateProvider from '@/app/_provider/reservation-create-provider';
import ReservationsCreatePage from '@/app/pages/reservations/ui/reservations-create-page';

const Page = () => {
  return (
    <ReservationCreateProvider>
      <ReservationsCreatePage />
    </ReservationCreateProvider>
  );
};

export default Page;
