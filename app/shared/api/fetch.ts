import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import instance, { BASE_URL } from './axios-instance';

export const getAsync = async <T>(
  path: string,
  isRouteRequest?: true,
  params?: Record<string, any>
): Promise<T> => {
  try {
    // if (isRouteRequest) {
    //   const response: AxiosResponse<T> = await axios.get(path, {
    //     params,
    //   });
    //   return response.data;
    // } else {
    const response: AxiosResponse<T> = await instance.get(path, { params });
    return response.data;
    // }
  } catch (error) {
    console.error('getAsync Error:', error);
    throw error;
  }
};

export const postAsync = async <T, K>(
  path: string,
  body?: T,
  isRouteRequest?: true,
  params?: Record<string, any>
): Promise<K> => {
  try {
    // if (isRouteRequest) {
    //   const response: AxiosResponse<K> = await axios.post(path, body, {
    //     params,
    //   });
    //   return response.data;
    // } else {
    const response: AxiosResponse<K> = await instance.post(path, body, {
      params,
    });
    return response.data;
    // }
  } catch (error) {
    console.error('Error in postAsync:', error);
    throw error;
  }
};

export const putAsync = async <T, K>(
  path: string,
  body?: T,
  isRouteRequest?: true,
  params?: Record<string, any>
): Promise<K> => {
  if (isRouteRequest) {
    const response: AxiosResponse<K> = await axios.put(path, body, {
      params,
    });
    return response.data;
  }

  const response: AxiosResponse<K> = await instance.put(path, body, {
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

// export const deleteAsync = async <T>(
//   path: string,
//   params?: Record<string, any>
// ): Promise<T> => {
//   const response: AxiosResponse<T> = await instance.delete(path, { params });
//   return response.data;
// };

export const deleteAsync = async <T>(
  path: string,
  isRouteRequest?: true,
  params?: Record<string, any>
) => {
  try {
    if (isRouteRequest) {
      await axios.delete(path, {
        params,
      });
    } else {
      await instance.delete(path, {
        params,
      });
    }
  } catch (error) {
    console.error('deleteAsync Error:', error);
    throw error;
  }
};
