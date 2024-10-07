import axios from 'axios';
import { BASE_URL } from './axios-instance';
import { ErrorResponse } from './type';
import { cookies } from 'next/headers';

interface AuthTokenResponse {
  data: {
    access_token: string;
    refresh_token: string;
  };
}
const refreshTokens = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const Cookies = cookies();
  try {
    const response = await axios.post<AuthTokenResponse>(
      BASE_URL + '/members/reissue',
      {
        access_token: Cookies.get('accessToken'),
        refresh_token: Cookies.get('refreshToken'),
      }
    );

    const newAccessToken = response.data.data.access_token;
    const newRefreshToken = response.data.data.refresh_token;

    Cookies.set('accessToken', newAccessToken);
    Cookies.set('refreshToken', newRefreshToken);

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    Cookies.delete('accessToken');
    Cookies.delete('refreshToken');

    throw new Error('토큰 재발급 실패');
  }
};

let refreshTokenPromise: Promise<{
  accessToken: string;
  refreshToken: string;
}> | null = null;

const getRefreshTokenServerPromise = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = refreshTokens();
  }
  return refreshTokenPromise;
};

export default getRefreshTokenServerPromise;

export function isErrorResponse(data: any): data is ErrorResponse {
  return 'code' in data;
}
