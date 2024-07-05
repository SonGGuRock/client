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
