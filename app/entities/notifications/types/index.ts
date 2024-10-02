export type NotificationCategories =
  | {
      ko: '전체';
      en: 'all';
    }
  | {
      ko: '예약';
      en: 'reservation';
    }
  | {
      ko: '할일';
      en: 'todo';
    }
  | {
      ko: '작품';
      en: 'craft';
    }
  | {
      ko: '공지';
      en: 'announcement';
    }
  | {
      ko: '운영';
      en: 'enrollment';
    }
  | {
      ko: '승인';
      en: 'class_management';
    };

export type Notification = {
  id: number;
  category: NotificationCategories['ko'];
  subcategory: string;
  content: string;
  updated_at: string;
  readers: NotificationReader[];
  is_read: boolean;
  redirect_id: number;
};
type NotificationReader = {
  id: number;
  profile_picture: string;
  name: string;
};
