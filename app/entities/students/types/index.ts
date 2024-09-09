export type Student = {
  name: string;
  profile_picture: string;
  id: number;
  remaining_class_count: number;
  last_payment_date: string;
};

export type StudentVisit = {
  reservation: boolean;
  reservation_id: number | null;
  payment: boolean;
  craft_item: {
    id: number;
    picture?: string;
  } | null;
};

type DayRecord = {
  [key: string]: StudentVisit;
};

export type MonthlyRecord = {
  [day: string]: DayRecord;
};

export type StudentYearlyRecord = {
  [month: string]: MonthlyRecord;
};

export type StuentVisitWithDate = {
  date: string;
} & StudentVisit;
