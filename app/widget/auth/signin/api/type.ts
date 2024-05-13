import { DataResponse } from '@/app/shared/api/type';

export type SigninRequest = {
  email: string;
  password: string;
};

export type SigninResponse = DataResponse<{
  access_token: string;
  refresh_token: string;
}>;
