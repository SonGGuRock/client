import useOperationSetting from '../lib/useOperationSetting';
import SettingMenu from './setting-menu';

const OperationSettingCapacity = () => {
  const { operation, set } = useOperationSetting();

  if (!operation) {
    return <div>최대 인원 설정을 찾을 수 없습니다</div>;
  }
  return (
    <SettingMenu className='py-6'>
      <SettingMenu.LabelLayout label='물레 최대 인원'>
        <SettingMenu.Input
          value={operation!.throw_capacity}
          isAutofocus={true}
          onChange={(e) => {
            set({ throw_capacity: Number(e.target.value) });
          }}
        />
        <SettingMenu.Subtext>명</SettingMenu.Subtext>
      </SettingMenu.LabelLayout>
      <SettingMenu.LabelLayout label='핸드빌딩 최대 인원'>
        <SettingMenu.Input
          value={operation!.hand_capacity}
          onChange={(e) => {
            set({ hand_capacity: Number(e.target.value) });
          }}
        />
        <SettingMenu.Subtext>명</SettingMenu.Subtext>
      </SettingMenu.LabelLayout>
    </SettingMenu>
  );
};

export default OperationSettingCapacity;
