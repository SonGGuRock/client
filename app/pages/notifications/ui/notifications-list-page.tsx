import { NotificationContext } from '@/app/_provider/notification-category-provider';
import Back from '@/app/shared/atoms/Back';
import Title from '@/app/shared/atoms/Title';
import Categories, {
  NotificationCategories,
} from '@/app/shared/modules/categories/categories';
import useNotificationCategories from '@/app/widget/notifications/lib/useNotificationCategories';
import NotificationsList from '@/app/widget/notifications/ui/notifications-list';

export const CATEGORIES: NotificationCategories[] = [
  { ko: '전체', en: 'all' },
  { ko: '예약', en: 'reservation' },
  { ko: '작품', en: 'craft' },
  { ko: '할일', en: 'todo' },
  { ko: '운영', en: 'enrollment' },
  { ko: '승인', en: 'approval' },
  { ko: '공지', en: 'announcement' },
];

const NotificationsListPage = () => {
  const context = useNotificationCategories();
  return (
    <div className='py-3 px-4'>
      <div className='flex w-full items-center justify-between text-lg font-semibold'>
        <div className='flex gap-1 items-center'>
          <Back />
          <Title>알림</Title>
        </div>
        <span className='text-grey900 text-sm'>전체 읽음</span>
      </div>

      {/* <Categories
        classNames='mt-4 mb-5'
        categories={CATEGORIES}
        context={context}
      /> */}
      <NotificationsList />
    </div>
  );
};

export default NotificationsListPage;
