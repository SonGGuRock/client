import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { ErrorResponse } from './type';
import getRefreshTokenPromise, { isErrorResponse } from './refreshTokens';
import https from 'https';

export const BASE_URL = 'https:/songgurock.duckdns.org/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
});

// new https.Agent({ rejectUnauthorized: false }

// let failedQueue: Array<{
//   resolve: (value: string) => void;
//   reject: (reason?: any) => void;
// }> = [];

// const processQueue = (
//   error: AxiosError | null,
//   token: string | null = null
// ) => {
//   failedQueue.forEach((promise) => {
//     if (error) {
//       promise.reject(error);
//     } else {
//       promise.resolve(token!);
//     }
//   });
//   failedQueue = [];
// };

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

    console.log(error, '📌📌📌');

    if (
      error.response &&
      isErrorResponse(error.response.data) &&
      error.response.data.code === '1110'
    ) {
      try {
        const { accessToken } = await getRefreshTokenPromise();
        instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

        if (originalRequest) {
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return instance(originalRequest);
        }
      } catch (err) {
        window.location.href = '/signin';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
