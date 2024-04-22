import Header from '@/app/shared/modules/header';
import { SwitchView } from '@/app/widget/reservations/ui/swtich-view';

const ReservationsHeader = () => {
  return (
    <Header>
      <Header.Title title='예약' />
      <SwitchView />
    </Header>
  );
};

export default ReservationsHeader;
