import useOperationSetting from '../lib/useOperationSetting';
import SettingMenu from './setting-menu';

interface ClasstimeSettingItemProps {
  index: number;
}

const ClasstimeSettingItem = ({ index }: ClasstimeSettingItemProps) => {
  const { operation, set } = useOperationSetting();
  if (!operation) {
    return <></>;
  }
  return (
    <span className='w-full flex justify-center  items-center'>
      <SettingMenu.Input
        value={operation.class_times[index].start_time}
        onChange={(e) => {
          const updated = [...operation.class_times];
          updated[index].start_time = Number(e.target.value);
          set({ class_times: updated });
        }}
      />
      <SettingMenu.Subtext>~</SettingMenu.Subtext>
      <SettingMenu.Input
        value={operation.class_times[index].end_time}
        onChange={(e) => {
          const updated = [...operation.class_times];
          updated[index].end_time = Number(e.target.value);
          set({ class_times: updated });
        }}
      />
      <SettingMenu.Subtext>시</SettingMenu.Subtext>
    </span>
  );
};

export default ClasstimeSettingItem;
