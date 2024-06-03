import https from 'https';
import { BASE_URL } from '@/app/shared/api/axios-instance';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import getRefreshTokenServerPromise from '@/app/shared/api/refreshTokenServer';

type ErrorResponse = {
  result: '0';
  code: string;
  message: string;
};

const allowedCookies = ['ISADMIN', 'TEACHERID', 'WORKSHOPID'];

export async function GET(request: NextRequest) {
  return handleRequest(request, 'GET');
}

export async function POST(request: NextRequest) {
  return handleRequest(request, 'POST');
}

export async function PUT(request: NextRequest) {
  return handleRequest(request, 'PUT');
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request, 'DELETE');
}

async function handleRequest(request: NextRequest, method: Method) {
  const cookieStore = cookies();
  const cookieHeader = allowedCookies
    .map((cookieName) => {
      const cookie = cookieStore.get(cookieName);
      return cookie ? `${cookieName}=${cookie.value}` : null;
    })
    .filter(Boolean)
    .join('; ');

  const accessToken = cookieStore.get('accessToken')?.value;
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ErrorResponse>) => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.data &&
        error.response.data.code === '1110'
      ) {
        try {
          const { accessToken } = await getRefreshTokenServerPromise();
          instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

          if (originalRequest) {
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return instance(originalRequest);
          }
        } catch (err) {
          cookieStore.delete('accessToken');
          cookieStore.delete('refreshToken');
          return NextResponse.redirect(`http://localhost:3000/signin`);
        }
      }
      return Promise.reject(error);
    }
  );

  try {
    const requestConfig: AxiosRequestConfig = {
      method,
      url: request.nextUrl.pathname.replace('/api/credentials', ''),
      headers: {
        Cookie: cookieHeader,
      },
      data: request.body ? await request.json() : undefined,
    };

    const response = await instance.request(requestConfig);

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Axios error:', error);
      const errorResponse = {
        message: error.message,
        stack: error.stack,
        config: {
          method: error.config?.method,
          url: error.config?.url,
          headers: error.config?.headers,
          data: error.config?.data,
        },
        code: error.code,
        request: {
          method: error.request.method,
          path: error.request.path,
          headers: error.request.getHeaders(),
        },
        response: error.response
          ? {
              data: error.response.data,
              status: error.response.status,
              statusText: error.response.statusText,
              headers: error.response.headers,
            }
          : null,
      };
      return NextResponse.json(errorResponse, { status: 500 });
    } else {
      console.error('Unknown error:', error);

      cookieStore.delete('accessToken');
      cookieStore.delete('refreshToken');
      return NextResponse.redirect(`http://localhost:3000/signin`);
    }
  }
}

// AxiosError 타입 가드 함수
function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError === true;
}
