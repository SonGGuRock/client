import { NotificationContext } from '@/app/_provider/notification-category-provider';
import { useContext } from 'react';

const useNotificationCategories = () => {
  const notificationContext = useContext(NotificationContext);
  if (!notificationContext) {
    throw Error('Context Provider 내부에서 사용해주세요');
  }

  return notificationContext;
};

export default useNotificationCategories;
