import { DataResponse } from '@/app/shared/api/type';

export type Workshop = {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  profile_picture: string;
};

export type WorkshopRegisterListResponse = {
  approval: Workshop[] | [];
  pending: Workshop[] | [];
  rejection: Workshop[] | [];
};

export type TeacherRegisterResponse = {
  teacher_id: number;
};

export type WorkshopMutateRequest = Omit<Workshop, 'id'>;
export type WorkshopCreateResponse = DataResponse<{
  workshop_id: number;
  teacher_id: number;
}>;

export type ApprovalMemberInfo = {
  id: number;
  name: string;
  profile_picture: string;
  phone_number: string;
  submit_date: string;
};

export type ApprovalMemberList = {
  approved: ApprovalMemberInfo[];
  pending: ApprovalMemberInfo[];
};

export type MemberTypeMap = {
  teachers: '선생님';
  students: '수강생';
};

export type MemberTypeValue = keyof MemberTypeMap;
export type MemberTypeTitle = MemberTypeMap[MemberTypeValue];

export type MemberType = {
  value: MemberTypeValue;
  title: MemberTypeTitle;
};

export type ClassTime = {
  start_time: number;
  end_time: number;
};

export type WorkStepActivation = {
  // [key: string]: boolean;
  shape: boolean;
  dry: boolean;
  trim: boolean;
  glaze: boolean;
  color: boolean;
  bisque_fire: boolean;
  glaze_fire: boolean;
  triple_fire: boolean;
};

export type WorkshopOperation = {
  is_active_throw: boolean;
  class_times: ClassTime[];
  work_step_activation: WorkStepActivation;
} & ReservationAvailablePeriod &
  WorkshopCapacity;

export type ReservationAvailablePeriod = {
  reservation_available_max_period: number;
  reservation_available_min_period: number;
  reservation_cancel_available_period: number;
};

export type WorkshopCapacity = {
  throw_capacity: number;
  hand_capacity: number;
};

export type WorkshopEnvironment = {
  is_active_todo: boolean;
  reservation_notification: boolean;
  todo_notification: boolean;
  craft_notification: boolean;
  announcement_notification: boolean;
  class_management_notification: boolean;
  enrollment_notification: boolean;
};
