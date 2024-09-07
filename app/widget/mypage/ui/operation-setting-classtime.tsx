import IconCloseCircle from '@/app/shared/atoms/icons/icon-close-circle';
import ClasstimeSettingItem from './classtime-setting-item';
import SettingMenu from './setting-menu';
import IconPlusCircle from '@/app/shared/atoms/icons/icon-plus-circle';
import useOperationSetting from '../lib/useOperationSetting';

const OperationSettingClasstime = () => {
  const { operation, set } = useOperationSetting();

  if (!operation) {
    return <div>loading</div>;
  }
  return (
    <div>
      <SettingMenu className='pt-6 pb-4'>
        <p className='flex gap-2 items-center'>
          <span> 공방 운영 시간대</span>
          <span className='text-grey500 text-xs'>
            최대 4개까지 만들 수 있어요
          </span>
        </p>
      </SettingMenu>
      <ul className='flex flex-wrap gap-4 mx-4 mb-6'>
        {operation.class_times.map((time, idx) => (
          <li className='w-full flex gap-2 flex-nowrap  items-center'>
            <ClasstimeSettingItem key={time.start_time} index={idx} />
            <span
              onClick={() => {
                const updated = [...operation.class_times].filter(
                  (_, index) => index !== idx
                );
                set({ class_times: updated });
              }}
            >
              <IconCloseCircle classNames='' />
            </span>
          </li>
        ))}
      </ul>
      <div
        className='w-full flex justify-center pb-6'
        onClick={() => {
          const updated = [...operation.class_times];
          updated.push({
            start_time: 0,
            end_time: 0,
          });
          set({ class_times: updated });
        }}
      >
        <IconPlusCircle classNames='w-6 h-6' />
      </div>
    </div>
  );
};

export default OperationSettingClasstime;
