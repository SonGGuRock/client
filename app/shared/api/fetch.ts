export const BASE_URL = 'http://182.231.88.125:8080/v1';

export const GET = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

export const POST = async <T, K>(path: string, body: T): Promise<K> => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const DELETE = async (path: string) => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
