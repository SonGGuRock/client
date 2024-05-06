import { ResponseResult } from '@/app/shared/api/type';

export type VerficationEmailRequest = {
  is_new_member: boolean;
  email: string;
};

export type VerificationEmailResponse = {
  result: ResponseResult;
  data: {};
};
