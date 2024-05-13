import Cookies from 'js-cookie';

export const BASE_URL = 'http://182.231.88.125:8080/v1';

export const getAsync = async <T>(
  path: string,
  params?: Record<'name', any>
): Promise<T> => {
  const queryParams = new URLSearchParams(params).toString();

  const accessToken = Cookies.get('accessToken');
  const url = `${BASE_URL}/${path}?${queryParams ? `${queryParams}` : ''}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
};

export const postAsync = async <T, K>(
  path: string,
  body: T,
  baseUrl = BASE_URL
): Promise<K> => {
  const accessToken = Cookies.get('accessToken');

  const res = await fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
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
