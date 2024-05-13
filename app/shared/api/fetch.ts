export const BASE_URL = 'http://182.231.88.125:8080/v1';

export const getAsync = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const postAsync = async <T, K>(
  path: string,
  body: T,
  baseUrl = BASE_URL
): Promise<K> => {
  const res = await fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
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
