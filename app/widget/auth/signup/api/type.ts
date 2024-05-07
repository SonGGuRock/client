import { ResponseResult } from '@/app/shared/api/type';

export type VerficationEmailRequest = {
  is_new_member: boolean;
  email: string;
};

export type NoDataResponse = {
  result: ResponseResult;
  data: {};
};

export type VerficationCodeRequest = {
  code: string;
  email: string;
};
