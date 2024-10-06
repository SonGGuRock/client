import {
  NotificationCategoryKey,
  NotificationCategoryMap,
  SubcategoryMapType,
} from '../types';

export const SUBCATEGORY_MAP: SubcategoryMapType = {
  'new-todo': {
    title: '새 할일',
    redirectUrl: `/home`,
  },
};

export const CATEGORY_MAP: NotificationCategoryMap = {
  all: '전체',
  reservation: '예약',
  todo: '할일',
  craft: '작품',
  announcement: '공지',
  enrollment: '운영',
  class_management: '승인',
} as const;

export const notificationCategoryKeys = Object.keys(
  CATEGORY_MAP
) as NotificationCategoryKey[];

export const notificationCategoryArray = notificationCategoryKeys.map(
  (key) => ({
    key,
    value: CATEGORY_MAP[key],
  })
);
