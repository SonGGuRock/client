import { AuthTokenResponse } from '@/app/widget/auth/signin/api/type';
import axios from 'axios';
import { BASE_URL } from './axios-instance';
import Cookies from 'js-cookie';
import { ErrorResponse } from './type';

const refreshTokens = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
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
    // 토큰 재발급 실패 시 기존 토큰 삭제
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');

    // 로그인 페이지로 리디렉션
    window.location.href = '/signin';

    // 또는 Next.js 라우터 사용 시
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // router.push('/signin');

    // 오류 처리
    throw new Error('토큰 재발급 실패');
  }
};

let refreshTokenPromise: Promise<{
  accessToken: string;
  refreshToken: string;
}> | null = null;

const getRefreshTokenPromise = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = refreshTokens();
  }
  return refreshTokenPromise;
};

export default getRefreshTokenPromise;

export function isErrorResponse(data: any): data is ErrorResponse {
  return 'code' in data;
}
