// app/api/set-cookie/[workshopId]/route.ts
import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import https from 'https';
import { BASE_URL } from '@/app/shared/api/axios-instance';
import { cookies } from 'next/headers';

interface Params {
  id: string;
}

export async function POST(request: Request, context: { params: Params }) {
  const { id } = context.params;
  const cookieStore = cookies();
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
  try {
    // 다른 서버로 요청 보내기 (동적 workshop id 포함)
    const response: AxiosResponse = await instance.post(
      `workshops/${id}/teachers/active`,
      undefined
    );

    const nextResponse = new NextResponse(response.data, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': 'application/json',
        // 기타 필요한 헤더 추가
      },
    });
    const setCookieHeader = response.headers['set-cookie'];

    // Set-Cookie 헤더 값이 있다면, 응답 헤더에 설정
    if (setCookieHeader) {
      if (Array.isArray(setCookieHeader)) {
        setCookieHeader.forEach((cookie) => {
          nextResponse.headers.append('Set-Cookie', cookie);
        });
      } else {
        nextResponse.headers.append('Set-Cookie', setCookieHeader);
      }
    }

    return nextResponse;
  } catch (error) {
    console.error(error);
    return new Response('Error fetching data', { status: 500 });
  }
}
