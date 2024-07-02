import { DataResponse } from '@/app/shared/api/type';

export type Credentials = {
  email: string;
  password: string;
};

export type AuthTokenResponse = DataResponse<{
  access_token: string;
  refresh_token: string;
  id: number;
}>;
