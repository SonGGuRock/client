import { DataResponse } from '@/app/shared/api/type';

export type Workshop = {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  profile_picture: string;
};

export type TeacherRegisterResponse = {
  teacher_id: number;
};

export type WorkshopCreateRequest = {
  profile_picture: string;
  name: string;
  address: string;
  phone_number: string;
};
export type WorkshopCreateResponse = DataResponse<{
  workshop_id: number;
  teacher_id: number;
}>;
