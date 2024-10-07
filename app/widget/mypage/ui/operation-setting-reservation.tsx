import useOperationSetting from '../lib/useOperationSetting';
import SettingMenu from './setting-menu';

const OperationSettingReservation = () => {
  const { operation, set } = useOperationSetting();

  if (!operation) {
    return <></>;
  }

  return (
    <SettingMenu className='py-6'>
      <SettingMenu.LabelLayout label='수강 예약 가능 날짜'>
        <SettingMenu.Input
          value={operation.reservation_available_max_period}
          onChange={(e) => {
            set({ reservation_available_max_period: Number(e.target.value) });
          }}
        />
        <SettingMenu.Subtext>일 ~</SettingMenu.Subtext>
        <SettingMenu.Input
          value={operation.reservation_available_min_period}
          onChange={(e) => {
            set({ reservation_available_min_period: Number(e.target.value) });
          }}
        />
        <SettingMenu.Subtext>일 전</SettingMenu.Subtext>
      </SettingMenu.LabelLayout>
      <SettingMenu.LabelLayout label='수강 취소 가능 날짜 '>
        <SettingMenu.Subtext>최소</SettingMenu.Subtext>
        <SettingMenu.Input
          value={operation.reservation_cancel_available_period}
          onChange={(e) => {
            set({
              reservation_cancel_available_period: Number(e.target.value),
            });
          }}
        />
        <SettingMenu.Subtext>일 전</SettingMenu.Subtext>
      </SettingMenu.LabelLayout>
    </SettingMenu>
  );
};

export default OperationSettingReservation;
