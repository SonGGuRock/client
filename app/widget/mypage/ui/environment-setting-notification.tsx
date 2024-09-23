import { useEffect, useState } from 'react';
import { WorkshopEnvironment } from '../../workshops/api/type';
import { SettingMenuActivation } from './setting-menu/setting-menu-activation';
import { useMutateWithCrendetials } from '@/app/shared/api/fetch-with-credentials';
import Toast from '@/app/shared/modules/toast/ui/toast';
import useToast from '@/app/shared/modules/toast/lib/useToast';

const titleMap: Record<keyof WorkshopEnvironment, string> = {
  is_active_todo: '오늘의 할일 사용',
  reservation_notification: '예약 알림',
  todo_notification: '할일 알림',
  craft_notification: '작품 알림',
  announcement_notification: '공지 알림',
  class_management_notification: '수강관리 알림',
  enrollment_notification: '등록승인 알림',
};

const EnvironmentSettingNotification = (env: WorkshopEnvironment) => {
  const [clientEnv, setClientEnv] = useState<WorkshopEnvironment>(env);
  const { mutate } = useMutateWithCrendetials<WorkshopEnvironment>(
    'workshops/settings/environment'
  );
  const { toast, toggleToast } = useToast();

  const envMap = env
    ? Object.entries(clientEnv).map(([field, isActive]) => ({
        field,
        title: titleMap[field as keyof WorkshopEnvironment] || field, // titleMap에 없는 경우 필드명 그대로 사용
        isActive,
      }))
    : [];

  const handleSwitch = (updatadField: Partial<WorkshopEnvironment>) => {
    setClientEnv((prev) => ({ ...prev, ...updatadField }));
  };

  useEffect(() => {
    if (env === clientEnv) {
      return;
    }
    mutate(
      {
        method: 'PUT',
        body: clientEnv,
      },
      {
        onSuccess: () => {
          toggleToast({ text: '설정이 변경되었습니다' });
        },
      }
    );
  }, [clientEnv]);

  return (
    <div className='w-full flex flex-wrap gap-2 pt-1'>
      {envMap.map(({ field, title, isActive }, _) => (
        <SettingMenuActivation
          key={field}
          classNames={
            field === 'is_active_todo'
              ? 'w-full p-4 border-b border-grey100'
              : `w-full px-4 py-3`
          }
          isActive={isActive}
          onSwitch={(value) => {
            handleSwitch({ [field]: value });
          }}
        >
          {title}
        </SettingMenuActivation>
      ))}
      {toast && <Toast text={toast?.text} />}
    </div>
  );
};

export default EnvironmentSettingNotification;
