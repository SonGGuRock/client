import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://182.231.88.125:8080/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// export const getAsync = async <T>(
//   path: string,
//   params?: Record<'name', any>
// ): Promise<T> => {
//   const queryParams = new URLSearchParams(params).toString();

//   const accessToken = Cookies.get('accessToken');
//   const url = `${BASE_URL}/${path}?${queryParams ? `${queryParams}` : ''}`;
//   const res = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return res.json();
// };

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAsync = async <T>(
  path: string,
  params?: Record<string, any>
): Promise<T> => {
  const response: AxiosResponse<T> = await instance.get(path, { params });
  return response.data;
};

export const postAsync = async <T, K>(
  path: string,
  body: T,
  isRouteRequest?: true,
  params?: Record<string, any>
): Promise<K> => {
  if (isRouteRequest) {
    const response: AxiosResponse<K> = await axios.post(path, body, {
      params,
    });
    return response.data;
  }

  const response: AxiosResponse<K> = await instance.post(path, body, {
    params,
  });
  return response.data;
};

export const postFileAsync = async <T, K>(
  path: string,
  body: T,
  baseUrl = BASE_URL
): Promise<K> => {
  const accessToken = Cookies.get('accessToken');

  const res = await fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: body as FormData,
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};

export const deleteAsync = async (path: string) => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
