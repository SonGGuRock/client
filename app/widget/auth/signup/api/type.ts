import { ResponseResult } from '@/app/shared/api/type';

export type VerficationEmailRequest = {
  is_new_member: boolean;
  email: string;
};

export type NoDataResponse = {
  result: ResponseResult;
  data: {};
};

export type DataResponse<T> = {
  result: ResponseResult;
  data: T;
};

export type VerficationCodeRequest = {
  code: string;
  email: string;
};

export type SignupRequest = {
  user_type: 'teacher' | 'student';
  email: string;
  phone_number: string;
  name: string;
  birthday: string;
  password: string;
};

type SignupResponseData = Omit<SignupRequest, 'password'> & {
  id: number;
  profile_picture: string;
  is_received_notification: boolean;
};

export type SignupResponse = DataResponse<SignupResponseData>;
