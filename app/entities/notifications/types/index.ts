export type NotificationCategoryKey =
  | 'all'
  | 'reservation'
  | 'todo'
  | 'craft'
  | 'announcement'
  | 'enrollment'
  | 'class_management';

export type NotificationCategoryMap = {
  [K in NotificationCategoryKey]: string;
};

export type Notification = {
  id: number;
  category: NotificationCategoryKey;
  sub_category: string;
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

type RedirectUrlGenerator = (id?: number) => string;

export type SubcategoryKey = 'new-todo';

export interface SubcategoryItem {
  title: string;
  redirectUrl: string | RedirectUrlGenerator;
}

export type SubcategoryMapType = {
  [K in SubcategoryKey]: SubcategoryItem;
};
