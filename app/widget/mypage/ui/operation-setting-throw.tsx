import SettingMenu from './setting-menu';
import useOperationSetting from '../lib/useOperationSetting';

const OperationSettingThrow = () => {
  const { operation, set } = useOperationSetting();

  if (!operation) {
    return <div>물레 사용 설정을 찾을 수 없습니다</div>;
  }
  return (
    <SettingMenu className='py-6'>
      <SettingMenu.Activation
        isActive={operation!.is_active_throw}
        onSwitch={(value) => {
          set({ is_active_throw: value as boolean });
        }}
      >
        물레 사용
      </SettingMenu.Activation>
    </SettingMenu>
  );
};

export default OperationSettingThrow;
