import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { ErrorResponse } from './type';
import { AuthTokenResponse } from '@/app/widget/auth/signin/api/type';

export const BASE_URL = 'https://182.231.88.125:8080/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: string) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });
  failedQueue = [];
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError<ErrorResponse>) => {
    const originalRequest = error.config;

    if (error.response?.data.code === '1110') {
      if (isRefreshing) {
        return new Promise<string>(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token: string) => {
            if (originalRequest) {
              originalRequest.headers[`Authorization`] = `Bearer ` + token;
              return instance(originalRequest);
            }
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

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

        instance.defaults.headers[`Authorization`] = `Bearer ` + newAccessToken;
        processQueue(null, newAccessToken);
        isRefreshing = false;

        if (originalRequest) {
          originalRequest.headers[`Authorization`] = `Bearer ` + newAccessToken;
          return instance(originalRequest);
        }
      } catch (err) {
        processQueue(err as AxiosError, null);
        isRefreshing = false;
        return Promise.reject(err);
      }
    }
  }
);

export default instance;
