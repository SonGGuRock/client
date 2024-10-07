import Header from '@/app/shared/modules/header';
import { SwitchView } from '@/app/widget/reservations/ui/swtich-view';

const ReservationsHeader = () => {
  return (
    <Header className='bg-beige py-3 px-4'>
      <Header.Title>예약</Header.Title>
      <SwitchView />
    </Header>
  );
};

export default ReservationsHeader;
